import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function chad(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const parameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings
      })
    ]);

    tree = mergeWith(parameterizedTemplate)(tree, _context) as Tree;
    return tree;
  };
}
