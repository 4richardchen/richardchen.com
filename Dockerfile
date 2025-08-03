FROM ruby:3.3-alpine
RUN apk update && apk add --no-cache make build-base
COPY Gemfile .
RUN bundle install
WORKDIR /src/site
CMD ["jekyll", "serve", "-H", "0.0.0.0", "-P", "4000", "--force-polling"]