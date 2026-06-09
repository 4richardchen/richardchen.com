import Layout from '../../../components/Layout'

export default function Home() {
    return (
        <Layout title="Calculate AI's ROI">
            <p>Calculating AI's ROI is controversial yet demanded. I propose a framework here.</p>
            
            <h2>TLDR</h2>
            <p class="mb-4">Measure AI's contributions for the many different categories of work within a project as each varies. Blanket guesstimates are dangerously inaccurate, causing incorrect estimates, financials, and layoffs thus harming business. Cart before horse is unprofessional.</p>

            <h2>Overview, Principles</h2>
            <p class="mb-4">Primitive decision makers (don't dehumanize it by citing "decisions"; named humans make them) use GitHub CoPilot Admin stats like prompt counts, lines of code generated, generation like/dislikes, tokenmaxxing to inform layoffs. Token-based billing changes to GitHub CoPilot, a popular coding-aiding tool, in late May 2026 disincentivized tokenmaxxing which none, notably Planet Earth, can afford.</p>

            <p class="mb-4">Don't measure by the dev result a.k.a. code which is basically same functional result, often longer, possibly with more supply chain problems, more bugs, less readability, and more needless complexity.</p>

            <p class="mb-4">A fountain of profit is productivity. How to measure it? Methodology is often edited to fit the desired
            answer. Goal is more work for more people, not less. Excess focus on using productivity will lower output after a misleading initial rise.</p>

            <p class="mb-4">Vibe coding drops quality below quantity. Quality has real costs: maintenance, security, and business impact.</p>

            <p class="mb-4">Baseline metrics are hard to obtain as you won't have a control because a project wouldn't be developed twice, once with and once without AI, most stats are merely desired answers and not informed ones.</p>

            <h2>Details</h2>
            <ol>
                <li>pre-dev - infrastructure design, vendor procurement, system setup, config security and access, write readme, write tech estimate, write communications, creative-related meetings, internal comms, proof-of-concept prototypes, </li>
                <li>init dev - major savings, particuarly productivity because
                    <ol>
                        <li>1 prompt can lay out hours' worth of initial from scatch work</li>
                        <li>well writen prompts can handle divisions of labor during init dev such as what is style, what is structural, what is adjustable copy/text, and which design methodologies</li>
                        <li>also such prompts are repeatable thus can repeat the same labor for multiple projects thus economy of scale</li>
                        <li>also such prompts in herently document the entireity of human intervention (now such a dark term) and enable repeatability for other business purposes like offshoring, digital nomad, productivity boasts at presentations, etc.</li>
                        <li>initial templates are already largely copy-pasted, well documented online so rife for AI's recursive training and domain footprint expansion; few trades can avoid, perhaps none except to innovate outside AI's skills</li>
                        <li>quality important to maintain from the start; bugs' fixing and regression testing later are multiples more as with any field of work (build/making-related ones apply but even writing, arts, etc.)</li>
                    </ol>
                    It is hard to come up with a number here, but think multiples.
                </li>
                <li>routing, edit rounds, further development - AI saves little time unless you already setup the project to benefit in this area which requires different practices sign onto the improvement but often stovepiping and personal concerns co-opt such improvements; typically this means separating style from markup/structure from content which is rarely done except for long-term projects, not one-offs; while image differential tools would be easier to make with AI making series of screenshots which visually show what's changed each commit, that's all a pipedream for most tech projects as screenshotting tools come and go with ease and require so much multi-department agreement</li>
                <li>scope changes - most often the workaround to changing budget or to meet more client asks with less budget; process should trigger tech estimates and scope changes and client re-budgeting with each ask, else will be loss for dev and write-offs for finance; the more akin the scope change is to initial dev, the more akin the estimate is, and vice versa
                    <ol>
                        <li>SEO, GEO - secretive arts for billing but mostly automatable stuff
                            <ol>
                                <li>wip: are organic numbers secretive because they're poor?</li>
                                <li>wip: has an evaluation ever been done of so much SEO projects? spend the money on it OR we get the clients MORE value? Publicis dared to pin financial billables on quantative ROIs, but which ones?</li>
                            </ol>
                        </li>
                        <li>ADA, accessiblity, digital inclusion, client vendors' scans, reports, internal scans - all AI generated thus AI resolveable equallty automatically</li>
                    </ol>
                </li>
                <li>build (integration coordination, vendors), deploy, QA, QC, vendor or any testing - little AI benefit here unless intentionally made and as such, those investments are negative productivity the first time around as they take more time than merely the old ways</li>
                <li>client satisfaction, departmental satisfaction a.k.a. internal comms (meetings, messages), external comms (if any), internal process (paperwork, regulatory, legal, corporate, security, maintenance) - real work requiring realbillables; account teams hide the "making of the sausage" a.k.a. reality of client relations and communications, thus shields itself inherently from AI's reach, so make sure to communicate directly with client technical folks to gain insight</li>
                <li>todo: why AI killed SEO decades ago; GoogleBot long ago went to AI over keyword loading</li>
                <li>analytics, post-production, post-mortum, continued business pitch - all very squishy to calculate
                    <ol>
                        <li>analytics - unwantedly secretive, topline is insufficient, details are ignored, how to resolve? A-B a whole site?</li>
                    </ol>
                </li>
            </ol>

            <h2>Measure It</h2>
            <p class="mb-4">
                To quantify, measure the AI savings of time, money:
            </p>
            <ol>
                <li>Have a control where the developer codes it without AI then a developer with AI. Not possible financially except for journalists or non-profits.</li>
                <li>More realistically, no control can exist so anything will be a guess. Regardless, management wants numbers so here's the best one can do (and as aforementioned, I didn't use any AI to write this page or this site):
                    <ol>
                        <li>costs are real: billables of finance, legal, every dept, every internal communication, internal apps and creative engineering and internal product teams to make the UI which will capture all work for all employees taking dozens of employees year plus, the dozens to hundreds to thousands of offshore developers to code the such or the same thru a contractor; the data engineering stores to capture hld and process all the captured employee training data (much of the value is finally getting documentation and value-laden evidence of all employee actions, even better than direct surveillance); dozens of onshore staff to oversee all that labor, the internal marketing and communications and legal and HR and finance billables to oversee it all; the billables of the software and engineering systems to run the said internal AI UI; all of the vendor architecture; software subscriptions and negotiation labor from multiple legal counsels; engineering and usage fees for the corporation are real bills; any dedicated computing/hardware infrastructure on the corporate side are internally accounted; all the internally billed training hours from forced training and all of the labor to organize and pay for such training and the internal accounting labor to plan to accept it then process it; continued monitoring of all the such systems with all the multipliers of departments and contractors to support its auditing; customer support for it all which comes out of some department which is willing; </li>
                        <li>savings are hoped: new coding bugs, skipped QC cycles, more cybersecurity alerts from increased AI-powered scans, maybe no departments will change their actual processes because higher or padded billables are more profitable; reduced productivity or raised unbillable time spent on said learning and initialization; less rework comes from an internal review and internal process and culture of discipline which actually improves the asks instead of doing each ask faster but thus enabling more asks a-la-tragedy of the commons; actual savings in errors, bugs, side effects comes from a review which ensures not merely more code rather actually better code which reaches the goal; shrinking a project overall requires not just that dev occurs faster but that all the other weak links in the chain are also able to shorten their work, as heaping all hopes on dev which is typically some 10-20% of an overall budget on a not-only tech project is improper</li>
                    </ol>
                </li>
            </ol>
        </Layout>
    )
}