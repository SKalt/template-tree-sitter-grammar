/* global seq, choice, repeat, repeat1, optional, prec, token, alias, field */
module.exports = grammar({
  name: "GRAMMAR_NAME",
  rules: {
    // see https://tree-sitter.github.io/tree-sitter/creating-parsers#the-grammar-dsl
    source_file: $ => "hello there"
  }
});
