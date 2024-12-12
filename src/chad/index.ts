import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function chad(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    let name = _options.name;
    if(tree.exists('hello.js')){
      tree.delete('hello.js');
  }
  tree.create('hello.js', `console.log('Hello ${name}')`);
  return tree;
  };
}
