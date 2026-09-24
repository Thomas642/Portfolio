# Thomas Jourda

**Technicien systèmes & réseaux** | Alternant ASR (CESI Pau) | Sud-Ouest, mobile partout en France

Je travaille sur des infrastructures multi-sites (Windows Server, Active Directory, RDS, pare-feux, VPN) et je m'entraîne en parallèle sur de l'auto-hébergement et de l'observabilité sur mon propre VPS.

🌐 [Portfolio](https://thomas642.github.io/Portfolio/) · 📫 [LinkedIn](https://www.linkedin.com/in/thomas-jourda-a65731283/) · [Email](mailto:thomasjrd6453@gmail.com) · 🔎 En recherche de CDI / CDD en informatique, disponible immédiatement

---

## 🛠️ Compétences

| Domaine | Technologies |
|---|---|
| Systèmes | Windows Server, RDS, FSLogix, Active Directory, GPO, Windows 10/11, Linux (Debian, Ubuntu, Linux Lite) |
| Réseau | Routage, LAN/WAN, VLAN 802.1Q, VPN IPsec, switchs Aruba, Wi-Fi, Cisco Packet Tracer |
| Sécurité | Stormshield, MFA/TOTP, Cloudflare Zero Trust, durcissement SSH, fail2ban |
| Virtualisation & conteneurs | Docker, Docker Compose, VMware, VPS OVH, Apache Guacamole, MariaDB, Nginx |
| Supervision | Zabbix, Aruba Instant On, Prometheus, Grafana, Loki, Grafana Alloy, cAdvisor, node-exporter |
| Scripting | PowerShell, Bash |
| Collaboration / M365 | Synchronisation AD vers Microsoft 365, Outlook / Exchange, ticketing GestSup |

---

## 📂 Projets

### 🔌 Renouvellement de la commutation réseau d'un site industriel (pro, mémoire de Bachelor ASR)
Scieries Lesbats, site de Léon, 10/2025 – 04/2026. Remplacement de 9 switchs de distribution hétérogènes (dont certains non manageables) par des Aruba Instant On 1930.
Cartographie de l'existant, pré-configuration sur Instant On (nommage, VLANs, IP de management), bascule pendant la fermeture de la production, intégration dans Zabbix et Instant On.

### 🏛️ Refonte du SI d'une mairie multi-sites (école, CESI)
Étude de cas en tant que responsable informatique : 79 agents sur 12 sites. Plan de déploiement (adressage, AD/GPO, Hyper-V deux sites avec réplication, maquette Packet Tracer, 63 tests unitaires) puis maintien et sécurisation (écarts ANSSI/RGPD/NIS2, PCA, PRA, PSSI).

### 🔭 Stack d'observabilité auto-hébergée (VPS perso)
Supervision complète d'un VPS Ubuntu : Prometheus, Grafana, Loki, Alloy, cAdvisor, node-exporter.
Accès protégé par tunnel Cloudflare Zero Trust avec OTP, SSH durci (clé ed25519, mot de passe désactivé).
Dashboards maison : vue d'ensemble VPS, logs/sécurité, carte géographique des IP bannies par fail2ban (GeoLite2).
→ [Voir le dépôt](LIEN_A_COMPLETER)

### 🖥️ Passerelle d'accès distant Apache Guacamole (contexte pro, anonymisé)
Remplacement d'AnyDesk par une passerelle Guacamole conteneurisée (guacd, MariaDB, Guacamole) sous Docker Compose.
Authentification LDAP/AD, MFA TOTP, groupes d'équilibrage RDS, sauvegarde hebdomadaire automatisée par cron.
→ [Voir le dépôt](LIEN_A_COMPLETER)

### 🐧 Clients légers Linux sur Dell Wyse (contexte pro, anonymisé)
Déploiement de Linux Lite sur Dell Wyse 3070/5070 avec accès RDS via Remmina, autologin LightDM.
Rédaction de procédures d'installation versionnées, diagnostic d'incompatibilité clavier HID sur douchette code-barres en session RDP.
→ [Voir le dépôt](LIEN_A_COMPLETER)

### 🎮 BAKO, plateforme web d'une communauté de jeu (perso, en production)
Gestion d'une « famille » de joueurs sur un serveur DarkRP (membres, recrutement, sanctions, événements), en remplacement d'un Google Sheets.
Next.js + TypeScript, PostgreSQL/Prisma, connexion Steam OpenID. Hébergé sur VPS OVH : Nginx + Let's Encrypt, systemd, sauvegarde quotidienne de la base, CI/CD GitHub Actions.
→ [Voir le site](https://famille.gameone-val.com)

---

## 🎓 Parcours

- **2025 – 2026 · Bachelor ASR** (Bac+3, CESI Pau), alternance chez Scieries Lesbats (5 sites) : Windows Server, RDS, AD, Stormshield, Aruba, VPN, migration Windows 11, support multi-sites
- **2023 – 2025 · GMSI** (Bac+2, CESI Pau), alternance chez Smart Rx : technicien de maintenance et d'installation
- **07/2023 · Technicien informatique** (CDD), Info-Pix, Lescar
- **2021 – 2023 · Bac pro SN option RISC**, Lycée Saint-Cricq, Pau (4 stages en entreprise)

🌍 Anglais B2 · Espagnol B1 · Permis B, véhiculé
