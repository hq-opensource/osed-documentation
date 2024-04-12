FROM node:20-slim

# Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0

# Enable corepack.
RUN corepack enable

# Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Copy over the source code.
COPY . /opt/docusaurus/

# Install dependencies with `--immutable` to ensure reproducibility.
RUN yarn install --immutable

# Build the static site.
RUN yarn build

# Expose the port that Docusaurus will run on.
EXPOSE 3000

## Run the Web server.
CMD ["yarn", "serve", "--host", "0.0.0.0", "--no-open"]