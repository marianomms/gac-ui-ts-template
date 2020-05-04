alias help=/gac-ui-ts/script/private/welcome.sh
function prompt_func() {
  PS1="$RED\$(date +%H:%M) docker\w$YELLOW\$ $NO_COLOUR"
}
PROMPT_COMMAND=prompt_func
RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
NO_COLOUR="\[\033[0m\]"

export PATH="./node_modules/.bin/:$PATH"