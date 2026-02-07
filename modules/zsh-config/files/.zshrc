# Basic .zshrc
export PATH=$HOME/bin:/usr/local/bin:$PATH

HISTFILE=~/.zsh_history
HISTSIZE=1000
SAVEHIST=1000

bindkey -e

alias ls='ls --color=auto'
alias ll='ls -alF'
alias grep='grep --color=auto'

autoload -Uz promptinit
promptinit
prompt adam1
