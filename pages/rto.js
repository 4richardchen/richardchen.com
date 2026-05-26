import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

// costs: [label, key, defaultValue]
const costs = [
  ['base is 0 unless RTO gives stipend', 'income', '0'],
  ['2nd car cost', 'rent', '30000'],
  ['parking', 'parking', '0'],
  ['add\'l car maint + depreciation', 'maintenance', '2000'],
  ['lunch out', 'eat_out', '400'],
  ['lunch in', 'eat_in', '50'],
  ['productivity lost, overtime/afterhours at hourly pay rate', 'savings', '600'],
  ['CSA, train/plane, carshare, subway, ad hoc Uber/taxi', 'misc', '520']
]

// COST_DEFAULT constructed from costs (key -> defaultValue)
const COST_DEFAULT = Object.fromEntries(costs.map(([label, key, def]) => [key, def]))

const STORAGE_PREFIX = 'rto-'

function formatCurrency(n) {
  n = Math.abs(n); // to match the rises/drops language in "Summary"
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function RTO() {
  const [fields, setFields] = useState(COST_DEFAULT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const next = { ...COST_DEFAULT };
    try {
      Object.keys(COST_DEFAULT).forEach((k) => {
        const v = localStorage.getItem(STORAGE_PREFIX + k);
        if (v !== null) next[k] = v;
      })
    } catch (e) {
      /* ignore localStorage errors */
      console.error("localStorage issue", e);
    }
    setFields(next);
    setMounted(true);
  }, [])

  function setField(key, rawValue) {
    const sanitized = rawValue === '' ? '' : rawValue;
    setFields(prev => {
      const next = { ...prev, [key]: sanitized }
      try {
        localStorage.setItem(STORAGE_PREFIX + key, sanitized);
      } catch (e) {}
      return next;
    })
  }

  const nums = Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, parseFloat(v) || 0])
  )

  const totalExpenses = nums.rent + nums.parking + nums.maintenance + nums.eat_out + nums.eat_in + nums.savings + nums.misc;
  const net = nums.income - totalExpenses;
  //const savingsPct = nums.income > 0 ? Math.round((nums.savings / nums.income) * 100) : 0;
  const expensePct = Math.round((totalExpenses / 7200) * 100);

  const suggested = {}
  if (net < 0) {
    suggested.note = 'RTO reduces pay, get raised pay.'
    let need = Math.abs(net)
    const reducible = Math.max(nums.misc + nums.eat_out, 0)
    if (reducible > 0) {
      const reduceMisc = Math.min(nums.misc, Math.round((nums.misc / reducible) * need));
      const reduceGroc = Math.min(nums.eat_out, need - reduceMisc);
      suggested.reduce = {
        misc: Math.max(nums.misc - reduceMisc, 0),
        eat_out: Math.max(nums.eat_out - reduceGroc, 0)
      };
    }
  } else {
    suggested.note = 'RTO does\'t reduce pay';
    suggested.suggestIncreaseSavings = Math.max(Math.round(net / 2), 0);
  }

  if (!mounted) {
    return (
      <Layout title="RTO Calculator">
        <h1 className="text-2xl font-bold">RTO Calculator</h1>
        <p>Loading…</p>
      </Layout>
    )
  }

  return (
    <Layout title="RTO Calculator">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">RTO Calculator</h1>
        <p className="mb-4">Fields accept typing, keystrokes live update calculations, values store locally</p>
        <div className="space-y-3 mb-6">
          {costs.map(([label, key]) => (
            <label key={key} className="flex justify-between items-center">
              <span className="mr-4">{label}</span>
              <input
                inputMode="decimal"
                pattern="[0-9]*"
                value={fields[key]}
                onChange={(e) => {
                  const v = e.target.value
                  const cleaned = v.replace(/,/g, '')
                  setField(key, cleaned)
                }}
                className="border px-2 py-1 rounded w-40 text-right focus:outline-none invalid:border-red-500 invalid:text-red-600 invalid:ring-2 invalid:ring-red-300 invalid:placeholder-red-300"
              />
            </label>
          ))}
        </div>

        <div className="border rounded p-4 mb-4">
          <h2 className="font-semibold mb-2">Summary</h2>
          <div className="flex justify-between">
            <div className={net < 0 ? 'text-red-600' : 'text-green-600'}>
              Pay {net>0?"rises":"drops"} {formatCurrency(net)} ({expensePct}%)
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Hints</h3>
          <div className="text-sm">
            <div>{suggested.note}</div>
            {net < 0 && suggested.reduce && (
              <div className="mt-2">
                <div>Suggested quick cuts:</div>
                <ul className="list-disc pl-5">
                  <li>Misc: {formatCurrency(suggested.reduce.misc)}</li>
                  <li>Groceries: {formatCurrency(suggested.reduce.eat_out)}</li>
                </ul>
              </div>
            )}
            {net >= 0 && suggested.suggestIncreaseSavings > 0 && (
              <div className="mt-2">
                Consider moving up to {formatCurrency(suggested.suggestIncreaseSavings)} of your surplus to savings.
              </div>
            )}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          All fields are saved locally in your browser. To reset, clear/delete form's fields or in DevTools → Application → Local Storage → delete rows/keys starting with <code>{STORAGE_PREFIX}</code>".
        </div>
      </div>
    </Layout>
  )
}
