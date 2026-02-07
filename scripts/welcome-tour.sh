#!/usr/bin/env bash
# welcome-tour.sh - A celebratory interactive tour of CtxOS
set -e

# Visual Helpers
C_BLUE="\033[0;34m"
C_CYAN="\033[0;36m"
C_GREEN="\033[0;32m"
C_MAGENTA="\033[0;35m"
C_YELLOW="\033[1;33m"
C_RESET="\033[0m"

clear

echo -e "${C_CYAN}====================================================${C_RESET}"
echo -e "${C_CYAN}   🚀 WELCOME TO THE CTXOS LAUNCH EVENT   ${C_RESET}"
echo -e "${C_CYAN}====================================================${C_RESET}"
echo ""

sleep 1
echo -e "${C_YELLOW}[1/5] The Architecture${C_RESET}"
echo -e "Implementing a secure DBus API layer... ${C_GREEN}DONE${C_RESET}"
echo -e "Gating system actions with Polkit... ${C_GREEN}DONE${C_RESET}"
echo ""

sleep 1.5
echo -e "${C_YELLOW}[2/5] The Hybrid Engine${C_RESET}"
echo -e "Bridging APT, Flatpak, and Meta-Packages... ${C_GREEN}ACTIVE${C_RESET}"
echo -e "AppStream metadata integration... ${C_GREEN}READY${C_RESET}"
echo ""

sleep 1.5
echo -e "${C_YELLOW}[3/5] System Resilience${C_RESET}"
echo -e "Snapshot protection (Timeshift/Snapper)... ${C_BLUE}SHIELD ACTIVE${C_RESET}"
echo -e "Automated health validation... ${C_BLUE}VITAL SIGNS OK${C_RESET}"
echo ""

sleep 1.5
echo -e "${C_YELLOW}[4/5] Global Reach & Identity${C_RESET}"
echo -e "Localization Engine (English/Spanish)... ${C_MAGENTA}READY${C_RESET}"
echo -e "OEM Branding Overrides... ${C_MAGENTA}CONFIGURABLE${C_RESET}"
echo ""

sleep 1.5
echo -e "${C_YELLOW}[5/5] Portability${C_RESET}"
echo -e "Docker, VM, and WSL Support... ${C_GREEN}FULL SUPPORT${C_RESET}"
echo ""

sleep 2
echo -e "${C_CYAN}----------------------------------------------------${C_RESET}"
echo -e "   ${C_WHITE}CtxOS is now officially ENGINEERED.${C_RESET}"
echo -e "${C_CYAN}----------------------------------------------------${C_RESET}"
echo ""
echo -e "Run ${C_GREEN}./scripts/pipeline-master.sh patch${C_RESET} to launch your first release!"
echo ""
echo -e "${C_YELLOW}Happy Distro Building! 🏁✨${C_RESET}"
echo ""
