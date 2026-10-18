/* Portfolio content, taken from the Notion page
   "Portfolio - AI - Brand Identity - DashBoards - Full Stack Programming - SEO - Social Media - Websites". */
window.PF_DATA = {
  profile: {
    name: 'Pedro Varela Pinto',
    photo: 'assets/photo_pedro.jpg',
    agent: 'assets/agent_icon.png',
    cover: 'assets/cover-ai-agent.jpg',
    notion: 'https://military-couch-982.notion.site/Portfolio-AI-Brand-Identity-DashBoards-Full-Stack-Programming-SEO-Social-Media-Website-3fded16b5f5b8006b695f86fb08666d0',
    cv: 'https://pedropdvp.github.io/Dashboard_Curriculum_pdvp/',
    pillars: ['AI', 'Brand Identity', 'DashBoards', 'Full-Stack Programming', 'SEO', 'Social Media', 'Websites'],
    contacts: {
      mobile: '+351 912 48 41 43',
      email: 'pedropdvp@gmail.com',
      address: 'Rua Rodrigo Reinel nº4 4ºEsq, 1400-320 Lisboa',
      born: '03/03/1968',
      registrations: 'INCI nº68102 Cl.1 | O.Eng.M. Efectivo Nº65132',
      nationality: 'Portuguese',
      linkedin: 'https://www.linkedin.com/in/pedrodinisvarelapinto',
    },
  },
  sections: [
    {
      id: 'ai-assistants', title: 'AI Assistants', icon: 'bot', pillar: 'AI',
      lede: 'Conversational AI assistants that answer customers 24/7 on behalf of a brand.',
      items: [
        { title: 'Pharus AI Assistant', img: 'assets/projects/pharus-ai-assistant.png',
          links: [{ url: 'https://chat-bot-std.vercel.app/', label: 'Open the assistant' }] },
      ],
    },
    {
      id: 'avatars', title: 'Avatars', icon: 'user', pillar: 'AI',
      lede: 'AI avatars that present a company and its services on video.',
      items: [
        { title: 'Pharus AI Avatar - Pitch', video: 'assets/pharus-ai-avatar-pitch.mp4', poster: 'assets/cover-ai-agent.jpg' },
      ],
    },
    {
      id: 'annual-report', title: 'Annual Report and Account', icon: 'book', pillar: 'Brand Identity',
      lede: 'EDP 2003 Annual Report and Accounts — created, designed and prepared for print in Portuguese, English and Spanish.',
      items: [
        { title: 'EDP 2003 Annual Report and Accounts', img: 'assets/projects/edp-2003-cover.png',
          desc: 'Institutional, Financial and Sustainability reports for each language, produced through the advertising agency SÓ Design.',
          gallery: ['assets/projects/edp-2003-three-reports.png', 'assets/projects/edp-2003-ceo-message.png'],
          files: [{ src: 'assets/projects/edp-institutional-report-2003-en.pdf', label: 'EDP Institutional Report 2003 (EN)' }] },
      ],
    },
    {
      id: 'business-plans', title: 'Business Plans', icon: 'chart', pillar: 'Full-Stack Programming',
      lede: 'Business plans for new ventures, published as Notion documents.',
      items: [
        { title: 'RPM - Renovations with Soul',
          links: [{ url: 'https://military-couch-982.notion.site/Plano-de-Neg-cios-RPM-27ded16b5f5b806e8af3e726633f8e40', label: 'Read the business plan' }] },
        { title: 'Pharus AI Agency',
          links: [{ url: 'https://app.notion.com/p/Plano-de-Neg-cio-Pharus-AI-Agency-3fced16b5f5b807ea37dc8ae5a9ba2af?source=copy_link', label: 'Read the business plan' }] },
      ],
    },
    {
      id: 'brand-identity', title: 'Brand Identity, National Marketing and Media Campaigns', short: 'Brand Identity & Campaigns', icon: 'palette', pillar: 'Brand Identity',
      lede: 'Media Capital Radios Corporation — brand identity and national campaigns with outdoors, newsmagazines and other media all through the country.',
      items: ['Radio Comercial', 'Best Rock', 'Radio Clube Portugues', 'Cidade FM'].map((r) => ({
        title: r, group: 'Media Capital Radios Corporation',
        desc: 'Brand Identity, National Campaigns having outdoors, newsmagazines and other media all through the country with their image.',
      })),
    },
    {
      id: 'brand-book', title: 'Brand Book', icon: 'swatch', pillar: 'Brand Identity',
      lede: 'Brand guidelines: logo, colour palette, typography and tone of voice.',
      items: [
        { title: 'Pharus AI Agency Brandbook',
          links: [{ url: 'https://labs.google.com/pomelli/brand_book/9FDjwIQnPMibjLy4waA_b0', label: 'Open the brand book' }] },
      ],
    },
    {
      id: 'dashboards', title: 'Dashboards', icon: 'grid', pillar: 'DashBoards',
      lede: 'Interactive web dashboards that turn business data into clear decisions.',
      items: [
        { title: 'DashBoard for quotes - Building works', img: 'assets/projects/dashboard-quotes-building-works.png',
          links: [{ url: 'https://claude.ai/artifact/2v1tYWTMR5MS9pQTjNyZHD', label: 'Open dashboard' }] },
        { title: 'DashBoard for presenting a Construction Company', img: 'assets/projects/dashboard-construction-company.png',
          links: [{ url: 'https://imperious-painel.pdvp.chatgpt.site/#visao', label: 'Open dashboard' }] },
        { title: 'Dashboard for Property Investment Projects Analysis (Excel)', img: 'assets/projects/dashboard-property-investment-excel.png' },
        { title: 'DashBoard for presenting a Database for a Travel Agency', img: 'assets/projects/dashboard-travel-agency.png',
          links: [{ url: 'https://atlas-viagens.pdvp.chatgpt.site/', label: 'Open dashboard' }] },
        { title: 'Dashboard for an Online Store', img: 'assets/projects/dashboard-online-store.png' },
        { title: 'Dashboard for the Condominium Market Analysis', img: 'assets/projects/dashboard-condominium-market.png',
          links: [{ url: 'https://pedropdvp.github.io/Gest_Condominios/', label: 'Open dashboard' }] },
      ],
    },
    {
      id: 'powerbi', title: 'Dashboards - With PowerBI having data transformation with PowerQuery', short: 'Power BI Dashboards', icon: 'bars', pillar: 'DashBoards',
      lede: 'Power BI reports with data transformation in Power Query.',
      items: [
        { title: 'Power BI report — view 1', img: 'assets/projects/powerbi-1.png' },
        { title: 'Power BI report — view 2', img: 'assets/projects/powerbi-2.png' },
        { title: 'Power BI report — view 3', img: 'assets/projects/powerbi-3.png' },
      ],
    },
    {
      id: 'platforms', title: 'Platforms for various business sectors', short: 'Business Platforms', icon: 'layers', pillar: 'Full-Stack Programming',
      lede: 'Full-stack web platforms built for specific industries.',
      items: [
        { title: 'Lawyers Office Management - LawFlow', img: 'assets/projects/platform-lawflow.png' },
        { title: 'Online training, content management and employability - MOZAI - AI Education Platform', img: 'assets/projects/platform-mozai.png',
          links: [{ url: 'https://plataforma-formacao-mozai.vercel.app/dashboard', label: 'Open platform' }] },
        { title: 'Agricultural and Wine Farms Management', img: 'assets/projects/platform-wine-farms.png',
          links: [{ url: 'https://winemetricsfullstack-bom.onrender.com/', label: 'Open platform' }] },
        { title: 'Condominium Management - CondoManager', img: 'assets/projects/platform-condomanager.png',
          links: [{ url: 'https://condomanager.onrender.com/', label: 'Open platform' }] },
      ],
    },
    {
      id: 'social-seo', title: 'Social Media & SEO', icon: 'share', pillar: 'Social Media',
      lede: 'Instagram posts and reels created for six brands, building their social presence and search visibility.',
      items: [
        { title: 'oxy.agency', social: true, links: [
          { url: 'https://www.instagram.com/p/CxvFqtnArRb/?xtok=YTUybHdjdWNjNzh3&img_index=8', label: 'Instagram post' }] },
        { title: 'NutriAging - Ana Pinto', social: true, links: [
          { url: 'https://www.instagram.com/p/DXC6VfMDUSY/?dlrf=Z2pqbnd0aWh0ZHUw&img_index=3', label: 'Instagram post' },
          { url: 'https://www.instagram.com/p/DXC6VfMDUSY/?dlrf=Z2pqbnd0aWh0ZHUw&img_index=9', label: 'Instagram post' },
          { url: 'https://www.instagram.com/p/DS3Cli2DdEJ/?mdxt=MXRwYmp5dHllM3hkZA%3D%3D&img_index=4', label: 'Instagram post' }] },
        { title: 'Casa Moinho da Mouta', social: true, links: [
          { url: 'https://www.instagram.com/casamoinhodamouta/reel/C_XvxH9KXv4/', label: 'Instagram reel' },
          { url: 'https://www.instagram.com/p/DecgfMSjJLt/?mdxt=NXlqdHB4NDJmajh2', label: 'Instagram post' },
          { url: 'https://www.instagram.com/casamoinhodamouta/p/DDC_R-9Cp9Q/?img_index=4', label: 'Instagram post' }] },
        { title: 'Douglas', social: true, links: [
          { url: 'https://www.instagram.com/reels/DRaFIbUDXLZ/', label: 'Instagram reel' }] },
        { title: 'Futah', social: true, links: [
          { url: 'https://www.instagram.com/p/CxvFqtnArRb/?xtok=YTUybHdjdWNjNzh3&img_index=8', label: 'Instagram post' },
          { url: 'https://www.instagram.com/reels/DVskgZhjBHe/', label: 'Instagram reel' },
          { url: 'https://www.instagram.com/reels/DYb6I39Me4u/', label: 'Instagram reel' },
          { url: 'https://www.instagram.com/reels/DYHv9kcuAAp/', label: 'Instagram reel' },
          { url: 'https://www.instagram.com/reels/DX8_Mv8sxZ4/', label: 'Instagram reel' }] },
        { title: 'SalaMaria - Docaria', social: true, links: [
          { url: 'https://www.instagram.com/salamarialx/reel/DdqmP2WI5GT/', label: 'Instagram reel' },
          { url: 'https://www.instagram.com/salamarialx?obrf=MXFhYzNoeXFhMmYyNQ%3D%3D', label: 'Instagram profile' },
          { url: 'https://www.instagram.com/p/DeesYwQt8PT/', label: 'Instagram post' },
          { url: 'https://www.instagram.com/p/Cz_E-cgsmbf/', label: 'Instagram post' },
          { url: 'https://www.instagram.com/p/DcMHWIKo-iw/', label: 'Instagram post' },
          { url: 'https://www.instagram.com/salamarialx/reel/Cy0QHdUMQLJ/', label: 'Instagram reel' }] },
      ],
    },
    {
      id: 'video', title: 'Video Production and Editing', short: 'Video Production', icon: 'film', pillar: 'Social Media',
      lede: 'Video production and editing for brands and streaming platforms.',
      items: [
        { title: 'Video production for Netflix Brasil', yt: 'BhGSC-gWQI8',
          links: [{ url: 'https://www.youtube.com/watch?v=BhGSC-gWQI8', label: 'Watch on YouTube' }] },
      ],
    },
    {
      id: 'websites', title: 'Websites', icon: 'globe', pillar: 'Websites',
      lede: 'Responsive, SEO-ready websites for companies and professionals.',
      items: [
        { title: 'WhyRen - Renewals with Soul', img: 'assets/projects/website-whyren.png' },
        { title: 'Pharus AI Agency - Lisboa, Portugal', img: 'assets/projects/website-pharus-ai.png',
          links: [{ url: 'https://pharus-ai-website.vercel.app/index.html', label: 'Visit website' }] },
        { title: 'Paula Martins Advogados - Tavira, Portugal', img: 'assets/projects/website-paula-martins.png',
          links: [{ url: 'https://paulamartinsadvogados.com/', label: 'Visit website' }] },
      ],
    },
  ],
};
