#!/bin/bash

GREEN="\033[0;32m"
BLUE="\033[1;34m"
NO_COLOUR="\033[0m"

echo -e "Commands:
 - ${GREEN}help${NO_COLOUR}\t\t\t\t\tShows this help message again.
 - ${GREEN}npm start${NO_COLOUR}\t\t\t\tCompiles code and delivers it through a webserver.
 - ${GREEN}npm test${NO_COLOUR}\t\t\t\tRuns the tests. Also connects to Chrome for debugging or vscode.
 \t\t\t\t\tCheck for more information: https://github.com/Sage/s1_gac_ui/blob/master/documentation/debug.md
 - ${GREEN}npm run jest${NO_COLOUR}\t\t\t\tRuns Jest without any default arguments or debugging.
 - ${GREEN}npm run lint -- src/artefacts${NO_COLOUR}\tRuns eslint for a specific project.

You can supply additional arguments to npm commands by separating them with two dashes. For example 'npm run jest -- --notify --watch'.
Each sub-project provides the same commands, so you can change your working directory to '/src/artefacts' to run tests only for that project.
You can also use Jest's '--projects' argument to run one or more projects from the root of the repository, for example 'npm test -- --projects src/artefacts src/contacts' will run only the tests for artefacts and contacts.

Jest CLI: ${BLUE}https://facebook.github.io/jest/docs/en/cli.html${NO_COLOUR}
s1_gac_ui: ${BLUE}https://github.com/Sage/s1_gac_ui/wiki${NO_COLOUR}"