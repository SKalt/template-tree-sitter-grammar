# Quickstart

```sh
#!/usr/bin/env bash
dest="${dest:-tree-sitter-grammar-GRAMMAR-NAME-HERE}"
npx degit SKalt/template-tree-sitter-grammar "$dest" \
  && cd "$dest" \
  && git init \
  && yarn
# optionally
yarn init
```

<details><summary>with <code>npm</code></summary>

```sh
#!/usr/bin/env bash
dest="${dest:-'tree-sitter-GRAMMAR-NAME-HERE'}"
npx degit SKalt/template-tree-sitter-grammar "$dest" \
  && cd "$dest" \
  && git init \
  && npm install
# optionally
npm init
```

</details>

<details><summary>without <code>degit</code></summary>

```sh
#!/usr/bin/env bash
dest="${dest:-tree-sitter-grammar-GRAMMAR-NAME-HERE}"
git clone https://github.com/SKalt/template-tree-sitter-grammar.git "$dest" \
  && cd "$dest" \
  && rm -rf ./.git \
  && git init \
  && yarn install
# optionally
yarn init
```

</details>

```sh
source ./scripts/workspace.sh # puts the local tree-sitter cli on your $PATH
```
