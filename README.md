# AngularLibrary
A Angular Application with StaffEmployee Library 

This Angular Application consist following features
1. Creating a Angular Library(StaffEmployees  - Which Returns the list of Staff Employees from API)
2. Deploying Created Library to the NPM registry

Please Follow These Steps for Developing the Angular Library
## Create Angular Project

Run `ng new Angular-Library` for a new Fresh  Angular Application. This Command  will automatically create a new Angular Application.


## Scaffold  Angular Library

Run `ng g lib StaffEmployee` for a new Fresh  Angular Library. This Command  will automatically Scaffold the Angular Library with respective Module and  Componenet and Add your Functionality in the Library.


## Build

After Adding the functionality Run `ng build StaffEmployee --prod` to build the angular Library,The build artifacts will be stored in the `dist/` directory. But if you make any Changes, the Library has to Rebuilt with corresponding Command

## Import Library Module

After the Build The Library Provides the public API, in the public.api.ts, to access the lirary on the Angular Application, The Coresponding Module has to be imported in the Angular Modules to use the Library 

## Development server

Now After Importing, Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Publish Library

The Angular Library can be Published in the NPM regostery, Before Publishing the Library has to be Build, Since the Angular Libraries are Compiled with IVY Engines, so the Library has to be build before Publishing.
   For Publishng the Library just run the Below Command
    1. `npm publish --access=public`
