import { Box, styled } from '@mui/material'
import { useEffect, useState } from 'react'

import Layers from '../src/components/Download/assets/layers.svg'

import Cloud from 'components/Download/ComponentIcons/Cloud'
import Raspberry from 'components/Download/ComponentIcons/Raspberry'
import DownloadSection from 'containers/DownloadContainers/DownloadSection'
import HelpSection from 'containers/DownloadContainers/HelpSection'
import HeroSection from 'containers/DownloadContainers/HeroSection'
import QnsASection from 'containers/DownloadContainers/QnASection'
import SuggestionSection from 'containers/DownloadContainers/SuggestionSection'
import { Edition, Editions, NextPageExtended, Question, Suggestion } from 'src/types'

export const StyledDownloadMainSectionWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export const StyledDownloadWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}))

const Download: NextPageExtended = () => {
  const [edition, setEdition] = useState<Editions>('security')
  // This is a workaround because we need to change the whole structure of the website,
  // how pages are rendered and what background each page has as well as padding and margin
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(180deg, #0A0118 0%, #0F0A1E 50%, #0A0118 100%)'

    return () => {
      document.body.style.background = '#06043E'
    }
  }, [])

  const ctx_editions: Edition[] = [
    {
      type: 'accordion',
      key: 'security',
      title: 'Security Edition',
      subtitle: 'The complete penetration testing platform',
      description:
        'CtxOS Security Edition is the flagship distribution packed with over 800 security tools for penetration testing, digital forensics, reverse engineering, and security research. Trusted by professionals worldwide for security assessments and ethical hacking.',
      downloadOptions: {
        buttonText: 'Download Security',
        direct: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.iso',
        torrent: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.iso.torrent'
      },
      accordionOptions: {
        buttonText: 'Download Security',
        direct: [
          {
            key: 'security',
            title: 'ISO (6.9 GB)',
            subtitle: 'For bare metal, laptops, computer desktop and more',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.iso'
          },
          {
            key: 'cloud',
            title: 'OVA (8.7 GB)',
            subtitle: 'VirtualBox Optimized Images',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.ova'
          },
          {
            key: 'vm',
            title: 'UTM (8.4 GB)',
            subtitle: 'For Apple Silicon virtual machines',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_arm64.utm.tar.gz'
          },
          {
            key: 'vm',
            title: 'VMDK (11.8 GB)',
            subtitle: 'For VMware products',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.vmdk'
          },
          {
            key: 'vm',
            title: 'QCOW2 (11.7 GB)',
            subtitle: 'Virtual disk for QEMU/KVM VMs',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.qcow2'
          }
        ],
        torrent: [
          {
            key: 'security',
            title: 'ISO',
            subtitle: 'For bare metal, laptops, computer desktop and more',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.iso.torrent'
          },
          {
            key: 'cloud',
            title: 'OVA',
            subtitle: 'VirtualBox Optimized Images',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.ova.torrent'
          },
          {
            key: 'vm',
            title: 'UTM',
            subtitle: 'For Apple Silicon virtual machines',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_arm64.utm.tar.gz.torrent'
          },
          {
            key: 'vm',
            title: 'VMDK',
            subtitle: 'For VMware products',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.vmdk.torrent'
          },
          {
            key: 'vm',
            title: 'QCOW2',
            subtitle: 'Virtual disk for QEMU/KVM VMs',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_amd64.qcow2.torrent'
          }
        ]
      },
      background:
        'linear-gradient(135deg, rgba(43, 127, 255, 0.2) 0%, rgba(0, 184, 219, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      info: [
        {
          iconName: 'security',
          title: '800+ Tools',
          subtitle: 'Complete security testing arsenal'
        },
        {
          iconName: 'cursor',
          title: 'Forensics Ready',
          subtitle: 'Digital forensics frameworks'
        },
        {
          iconName: 'core',
          title: 'Wireless Tools',
          subtitle: 'Advanced wireless penetration testing'
        },
        {
          iconName: 'code',
          title: 'Exploit Development',
          subtitle: 'Reverse engineering and exploitation'
        }
      ],
      includes_list: [
        'Metasploit Framework',
        'Wireshark & Aircrack-ng',
        'John the Ripper',
        'Ghidra & Radare2',
        'And 800+ more tools...',
        'Burp Suite Community',
        'Nmap & Netcat',
        'Autopsy & Sleuth Kit',
        'SQLmap & Hydra'
      ],
      release_info: {
        version: '7.1',
        release_date: 'February 2026',
        size: '6.9 GB',
        architecture_tags: ['AMD64/x86_64']
      },
      system_requirements: {
        processor: 'Quad-core processor',
        memory: '4 GB minimum (8 GB recommended)',
        storage: '40 GB available space',
        graphics: '1024x768 minimum resolution',
        network: 'Ethernet and Wi-Fi adapters recommended'
      }
    },
    {
      type: 'accordion',
      key: 'home',
      title: 'Home Edition',
      subtitle: 'Your daily driver for privacy and development',
      description:
        'CtxOS Home is designed for everyday use, offering a perfect balance between privacy, security, and usability. Ideal for developers, students, and privacy-conscious users who want a reliable Linux distribution without the extensive pentesting toolkit. ',
      downloadOptions: {
        buttonText: 'Download Home (3.8 GB)',
        direct: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.iso',
        torrent: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.iso.torrent'
      },
      accordionOptions: {
        buttonText: 'Download Home',
        direct: [
          {
            key: 'home',
            title: 'ISO (3.3 GB)',
            subtitle: 'For bare metal, laptops, computer desktop and more',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.iso'
          },
          {
            key: 'cloud',
            title: 'OVA (3.8 GB)',
            subtitle: 'VirtualBox Optimized Images',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.ova'
          },
          {
            key: 'vm',
            title: 'UTM (3.6 GB)',
            subtitle: 'For Apple Silicon virtual machines',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_arm64.utm.tar.gz'
          },
          {
            key: 'vm',
            title: 'VMDK (5.3 GB)',
            subtitle: 'For VMware products',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.vmdk'
          },
          {
            key: 'vm',
            title: 'QCOW2 (5.2 GB)',
            subtitle: 'Virtual disk for QEMU/KVM VMs',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.qcow2'
          }
        ],
        torrent: [
          {
            key: 'home',
            title: 'ISO',
            subtitle: 'For bare metal, laptops, computer desktop and more',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.iso.torrent'
          },
          {
            key: 'cloud',
            title: 'OVA',
            subtitle: 'VirtualBox Optimized Images',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.ova.torrent'
          },
          {
            key: 'vm',
            title: 'UTM',
            subtitle: 'For Apple Silicon virtual machines',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_arm64.utm.tar.gz.torrent'
          },
          {
            key: 'vm',
            title: 'VMDK',
            subtitle: 'For VMware products',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.vmdk.torrent'
          },
          {
            key: 'vm',
            title: 'QCOW2 (5.2 GB)',
            subtitle: 'Virtual disk for QEMU/KVM VMs',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_amd64.qcow2.torrent'
          }
        ]
      },
      background:
        'linear-gradient(135deg, rgba(0, 184, 219, 0.2) 0%, rgba(0, 146, 184, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      info: [
        {
          iconName: 'cursor',
          title: 'Development Ready',
          subtitle: 'Pre-configured Dev Environments'
        },
        {
          iconName: 'security',
          title: 'Privacy First',
          subtitle: 'Built-in privacy and anonymity tools'
        },
        {
          iconName: 'core',
          title: 'Package Manager',
          subtitle: 'Access to vast Debian repositories'
        },
        {
          iconName: 'raspberry',
          title: 'Lightweight',
          subtitle: 'Runs smoothly on 2GB RAM'
        }
      ],
      includes_list: [
        'KDE Desktop Environment',
        'Firefox ESR',
        'Development Tools (Git, GCC, Python...)',
        'Media Players',
        'LibreOffice Suite',
        'Thunderbird',
        'Privacy Tools (Tor, OnionShare)',
        'Basic Security Tools'
      ],
      release_info: {
        version: '7.1',
        release_date: 'February 2026',
        size: '3.3 GB',
        architecture_tags: ['AMD64/x86_64']
      },
      system_requirements: {
        processor: 'Dual-core processor',
        memory: '2 GB minimum (4 GB recommended)',
        storage: '20 GB available space',
        graphics: 'No specific requirements',
        network: 'Ethernet and Wi-Fi adapter'
      }
    },
    // {
    //   type: 'menu',
    //   key: 'hackthebox',
    //   title: 'HTB Edition',
    //   subtitle: 'Optimized for Hack The Box challenges',
    //   description:
    //     'CtxOS HTB Edition is specifically tailored for Hack The Box enthusiasts and CTF players. Pre-configured with the most popular tools and workflows used by the HTB community, including automatic VPN setup and optimized networking for lab environments.',
    //   downloadOptions: {
    //     buttonText: 'Download HTB (5.2 GB)',
    //     direct: 'https://deb.ctx.sh/ctx/iso/6.4/Ctx-htb-6.4_amd64.iso',
    //     torrent: 'https://deb.ctx.sh/ctx/iso/6.4/Ctx-htb-6.4_amd64.iso.torrent'
    //   },
    //   background:
    //     'linear-gradient(135deg, rgba(0, 201, 80, 0.2) 0%, rgba(124, 207, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
    //   info: [
    //     {
    //       iconName: 'hackthebox',
    //       title: 'HTB Optimized',
    //       subtitle: 'Pre-configured for HTB labs'
    //     },
    //     {
    //       iconName: 'cursor',
    //       title: 'Auto VPN Setup',
    //       subtitle: 'Seamless OpenVPN integration'
    //     },
    //     {
    //       iconName: 'code',
    //       title: 'CTF Tools',
    //       subtitle: 'Popular CTF and challenge tools'
    //     },
    //     {
    //       iconName: 'core',
    //       title: 'HTB Themes',
    //       subtitle: 'Custom HTB-branded interface'
    //     }
    //   ],
    //   includes_list: [
    //     'OpenVPN with HTB configs',
    //     'pwntools & ROPgadget',
    //     'BloodHound & SharpHound',
    //     'Privilege Escalation Scripts',
    //     'Gobuster & ffuf',
    //     'CrackMapExec',
    //     'Impacket suite',
    //     'Custom HTB scripts & helpers'
    //   ],
    //   release_info: {
    //     version: '6.4',
    //     release_date: 'June 2025',
    //     size: '5.2 GB',
    //     architecture_tags: ['AMD64']
    //   },
    //   system_requirements: {
    //     processor: 'Quad-core processor',
    //     memory: '4 GB minimum (8 GB recommended)',
    //     storage: '35 GB available space',
    //     graphics: '1024x768 minimum resolution',
    //     network: 'Stable internet connection required'
    //   }
    // },
    {
      type: 'accordion',
      key: 'spins',
      title: 'Community Spins',
      subtitle: 'Community-built OS spins for specialized workflows',
      description:
        'Community Spins are custom operating system variants created and maintained by the community. Each spin is tailored for a specific use case, tooling set, or workflow giving users optimized environments for development, security, privacy, education, and more.',
      accordionOptions: {
        buttonText: 'Download Community Spins',
        direct: [
          {
            key: 'mate',
            title: 'MATE Edition (3.3GB)',
            subtitle: 'Traditional layout, reliable performance',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-spin-mate-7.1_amd64.iso'
          },
          {
            key: 'lxqt',
            title: 'LXQT Edition (2.3GB)',
            subtitle: 'Minimal desktop for maximum performance',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-spin-lxqt-7.1_amd64.iso'
          },
          {
            key: 'enlightenment',
            title: 'Enlightenment Edition (2.4GB)',
            subtitle: 'Fast, efficient, and highly customizable',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-spin-enlightenment-7.1_amd64.iso'
          }
        ],
        torrent: [
          {
            key: 'mate',
            title: 'MATE Edition (3.3GB)',
            subtitle: 'Traditional layout, reliable performance',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-spin-mate-7.1_amd64.iso.torrent'
          },
          {
            key: 'lxqt',
            title: 'LXQT Edition (2.3GB)',
            subtitle: 'Minimal desktop for maximum performance',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-spin-lxqt-7.1_amd64.iso.torrent'
          },
          {
            key: 'enlightenment',
            title: 'Enlightenment Edition',
            subtitle: 'Fast, efficient, and highly customizable',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-spin-enlightenment-7.1_amd64.iso.torrent'
          }
        ]
      },
      background:
        'linear-gradient(135deg, rgba(0, 201, 80, 0.2) 0%, rgba(124, 207, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      info: [
        {
          iconName: 'cursor',
          title: 'Development Ready',
          subtitle: 'Pre-configured Dev Environments'
        },
        {
          iconName: 'security',
          title: 'Privacy First',
          subtitle: 'Built-in privacy and anonymity tools'
        },
        {
          iconName: 'core',
          title: 'Package Manager',
          subtitle: 'Access to vast Debian repositories'
        },
        {
          iconName: 'raspberry',
          title: 'Lightweight',
          subtitle: 'Runs smoothly on 2GB RAM'
        }
      ],
      includes_list: [
        'Firefox ESR',
        'Development Tools (Git, GCC, Python...)',
        'Media Players',
        'LibreOffice Suite',
        'Thunderbird',
        'Privacy Tools (Tor, OnionShare)',
        'Basic Security Tools'
      ],
      release_info: {
        version: '7.1',
        release_date: 'February 2026',
        size: 'Varies',
        architecture_tags: ['AMD64/x86_64']
      },
      system_requirements: {
        processor: 'Dual-core processor',
        memory: '2 GB minimum (4 GB recommended)',
        storage: '20 GB available space',
        graphics: 'No specific requirements',
        network: 'Ethernet and Wi-Fi adapter'
      }
    },
    {
      type: 'accordion',
      key: 'raspberry',
      title: 'Raspberry Pi',
      subtitle: 'Full Ctx power on ARM devices',
      description:
        'CtxOS for Raspberry Pi brings the complete Ctx experience to ARM-based single-board computers. Perfect for portable penetration testing, IoT security research, and creating compact security labs with the versatility of Raspberry Pi hardware.',
      accordionOptions: {
        buttonText: 'Download Raspberry Pi',
        direct: [
          {
            key: 'core',
            title: 'Core Edition (746 MB)',
            subtitle: 'Minimal Ctx system',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_rpi.img.xz'
          },
          {
            key: 'security',
            title: 'Security Edition (4.0GB)',
            subtitle: 'Fully pentesting toolkit',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_rpi.img.xz'
          },
          {
            key: 'home',
            title: 'Home Edition (1.6 GB)',
            subtitle: 'Daily use & development',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_rpi.img.xz'
          }
        ],
        torrent: [
          {
            key: 'core',
            title: 'Core Edition',
            subtitle: 'Minimal Ctx system',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_rpi.img.xz.torrent'
          },
          {
            key: 'security',
            title: 'Security Edition',
            subtitle: 'Fully pentesting toolkit',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-security-7.1_rpi.img.xz.torrent'
          },
          {
            key: 'home',
            title: 'Home Edition',
            subtitle: 'Daily use & development',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-home-7.1_rpi.img.xz.torrent'
          }
        ]
      },
      background:
        'linear-gradient(135deg, rgba(251, 44, 54, 0.2) 0%, rgba(246, 51, 154, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      info: [
        {
          iconName: 'raspberry',
          title: 'ARM Optimized',
          subtitle: 'Native ARM support'
        },
        {
          iconName: 'security',
          title: 'Full Security Suite',
          subtitle: 'Complete pentesting toolkit'
        },
        {
          iconName: 'power',
          title: 'Low Power',
          subtitle: 'Efficient power consumption'
        },
        {
          iconName: 'core',
          title: 'GPIO Access',
          subtitle: 'Hardware hacking capabilities'
        }
      ],
      includes_list: [
        'ARM-compiled security tools',
        'Wireless adapter drivers',
        'Remote access tools (SSH, VNC)',
        'IoT testing frameworks',
        'GPIO libraries & tools',
        'SD card optimization',
        'Hardware hacking utilities',
        'Portable pentesting setup'
      ],
      release_info: {
        version: '7.1 ARM',
        release_date: 'February 2026',
        size: 'Varies',
        architecture_tags: ['ARM64']
      },
      system_requirements: {
        processor: 'Raspberry Pi 3/4/5 or compatible ARM board',
        memory: '2 GB minimum (4 GB recommended)',
        storage: '16 GB SD card minimum (32 GB recommended)',
        graphics: 'HDMI output supported',
        network: 'Ethernet or Wi-Fi (built-in or USB)'
      }
    },
    {
      type: 'accordion',
      key: 'special',
      title: 'Special Editions',
      subtitle: 'Specialized builds for unique requirements',
      description:
        'Explore our collection of specialized CtxOS builds including cloud editions, virtual machine optimized versions, minimal installs, and experimental releases. These editions are crafted for specific use cases and advanced users with particular requirements.',
      accordionOptions: {
        buttonText: 'Download Special',
        direct: [
          {
            key: 'container',
            title: 'Containers',
            subtitle: 'Docker, Kubernetes ready',
            link: 'https://ctx.run'
          },
          {
            key: 'core',
            title: 'Minimal RISC-V tarball',
            subtitle: 'Lightweight base system',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.0_riscv64.tar.xz'
          },
          {
            key: 'core',
            title: 'Windows Subsystem for Linux (WSL) (363 MB)',
            subtitle: 'Lightweight base system',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_wsl.zip'
          },
          {
            key: 'debian',
            title: 'Debian Conversion Script',
            subtitle: 'Automated conversion script',
            link: 'https://github.com/ctxos/project/debian-conversion-script'
          }
        ],
        torrent: [
          {
            key: 'core',
            title: 'Minimal RISC-V tarball',
            subtitle: 'Lightweight base system',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_riscv64.tar.xz.torrent'
          },
          {
            key: 'core',
            title: 'Windows Subsystem for Linux (WSL)',
            subtitle: 'Lightweight base system',
            link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_wsl.zip.torrent'
          }
        ]
      },
      background:
        'linear-gradient(135deg, rgba(173, 70, 255, 0.2) 0%, rgba(246, 51, 154, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      info: [
        {
          iconName: 'cloud',
          title: 'Cloud Ready',
          subtitle: 'AWS, Azure, GCP images'
        },
        {
          iconName: 'security',
          title: 'WSL Environment',
          subtitle: 'Runs on Windows Subsystem for Linux'
        },
        {
          iconName: 'core',
          title: 'Minimal Install',
          subtitle: 'Lightweight base system'
        },
        {
          iconName: 'special',
          title: 'Experimental',
          subtitle: 'Beta features & testing'
        }
      ],
      includes_list: [
        'Docker containers for Cloud platform images',
        'Server edition (no GUI)',
        'Experimental bleeding-edge builds',
        'Virtual machine templates (VMware, VirtualBox)',
        'Minimal base install tarballs'
      ],
      release_info: {
        version: 'Various',
        release_date: 'Ongoing',
        size: 'Varies',
        architecture_tags: ['AMD64', 'ARM64', 'RISCV64']
      },
      system_requirements: {
        processor: 'Varies by edition',
        memory: '1-8 GB depending on edition',
        storage: '10-50 GB depending on edition',
        graphics: 'Varies by edition',
        network: 'Depends on deployment type'
      }
    }
  ]

  const suggestions: Suggestion[] = [
    {
      title: 'Raspberry Pi',
      subtitle: 'ARM64 for Pi devices',
      link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_rpi.img.xz',
      icon: <Raspberry width="32" height="32" color="#00FFF0" />
    },
    {
      title: 'Windows Subsystem for Linux Edition',
      subtitle: 'Run it on Windows 10/11',
      link: 'https://deb.ctx.sh/ctx/iso/7.1/Ctx-core-7.1_wsl.zip',
      icon: <Layers />
    },
    {
      title: 'Docker Images',
      subtitle: 'Container deployments',
      link: 'https://ctx.run',
      icon: <Cloud width="32" height="32" color="#00FFF0" />
    }
  ]

  const questionAndAnswers: Question[] = [
    {
      question: 'Which edition should I choose?',
      answer:
        'Security Edition for penetration testing and cybersecurity operations, Home Edition for daily use and development, HTB Edition for Hack The Box challenges, Raspberry Pi for ARM devices, and Special Editions for specific use cases like cloud use or minimal experimental installs.'
    },
    {
      question: 'Is CtxOS completely free?',
      answer:
        'Yes, and it is also open source. Ctx is derived from Debian and inherits this characteristic as well. Moreover, all the projects maintained by the Ctx team are released under the GPL license.'
    },
    {
      question: 'Can I try CtxOS without installing it?',
      answer:
        'Yes! Before installation, you can try the system and then decide whether to install it or use it in live mode. In live mode, it’s also possible to create a persistent partition to keep your data.'
    },
    {
      question: 'How often is CtxOS updated?',
      answer:
        'Ctx’s repositories periodically synchronize with Debian’s stable branch, and for tools or other updates that require more urgency, we take care of importing and applying the updates ourselves. This ensures that the system remains reliable and up to date.'
    },
    {
      question: "What's the difference between Security and Home editions?",
      answer:
        'The Security edition includes the ctx-tools-full metapackage, which contains all the security tools, while the Home edition only includes our configurations for everyday use.'
    },
    {
      question: 'Where can I verify my downloads?',
      answer:
        'For each release, we create a file containing the hashes generated right after the build of each image is completed. In addition, the entire repository is signed with our GPG key, which is periodically updated.'
    }
  ]

  const selectedEdition: Edition | undefined = ctx_editions.find(
    searchedEdition => searchedEdition.key === edition
  )

  return (
    <StyledDownloadWrapper>
      <HeroSection />
      <StyledDownloadMainSectionWrapper>
        <DownloadSection
          edition={edition}
          setEdition={setEdition}
          selectedEdition={selectedEdition}
        />
        <SuggestionSection suggestions={suggestions} />
        <QnsASection questions={questionAndAnswers} />
        <HelpSection />
      </StyledDownloadMainSectionWrapper>
    </StyledDownloadWrapper>
  )
}

Download.hideEllipses = true

export default Download
