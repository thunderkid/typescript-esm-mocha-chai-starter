    export default function (wallaby)
    {
        return {

            debug: true,   // optional: enable to debug wallaby issues

            files: [
                'src/**/*.ts', // Adjust the path to include your source files
                'package.json', // Remove for commonjs
                // Exclude test files
                { pattern: '**/*.spec.ts', ignore: true }

            ],

            tests: [
                'tests/**/*.spec.ts'
            ],

            env: {
                type: 'node',
                runner: 'node',
                params: {  
                    // NOTE: Tell Wallaby to use the experimental specifier resolution. This is required for esnext
                    // as described in https://github.com/wallabyjs/public/issues/3312
                    runner: "--experimental-specifier-resolution=node"
                  }
            },

            testFramework: 'mocha',

            compilers: {
                '**/*.ts?(x)': wallaby.compilers.typeScript({
                    module: 'es2020', //'commonjs',   // for commonjs must also remove package.json reference above
                    target: 'es2021',
                    baseUrl: './src'
                })
            },

            // NOTE: This is required for esnext as mocha doesn't support resetting modules on file changes
            // https://wallabyjs.com/docs/integration/esm.html#mocha
            workers: {
                restart: true,
            },

            //executed in test framework context
            setup: function (wallaby) 
            {
                //var should = chai.should();
            }
        };
    };