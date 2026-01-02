
import React, { useState, useEffect } from 'react';
import { Product, Guide, Article } from './types';

// Cores definidas como constantes
const PRIMARY = "#265aed";
const SECONDARY = "#102451";

// Logo Component
const Logo = () => (
  <div className="flex items-center">
    <img 
      src="https://i.imgur.com/S5JXocD.png" 
      alt="Hardware Hub Logo" 
      className="h-7 md:h-8 w-auto object-contain"
    />
  </div>
);

// Components
const Navbar = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="sticky top-0 z-50 bg-[#080f24]/80 backdrop-blur-xl border-b border-white/5">
    <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="cursor-pointer transition-opacity hover:opacity-80" onClick={() => setPage('home')}>
        <Logo />
      </div>
      <ul className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
        <li><button onClick={() => setPage('home')} className={`${activePage === 'home' ? 'text-[#265aed]' : 'text-slate-400 hover:text-white'} transition-colors`}>Início</button></li>
        <li><button onClick={() => setPage('guias')} className={`${activePage === 'guias' ? 'text-[#265aed]' : 'text-slate-400 hover:text-white'} transition-colors`}>Guias</button></li>
        <li><button onClick={() => setPage('produtos')} className={`${activePage === 'produtos' ? 'text-[#265aed]' : 'text-slate-400 hover:text-white'} transition-colors`}>Produtos</button></li>
        <li><button onClick={() => setPage('artigos')} className={`${activePage === 'artigos' ? 'text-[#265aed]' : 'text-slate-400 hover:text-white'} transition-colors`}>Artigos</button></li>
      </ul>
      <button className="md:hidden text-slate-400">
        <i className="fas fa-bars text-xl"></i>
      </button>
    </nav>
  </header>
);

const Footer = ({ setPage }: { setPage: (p: string) => void }) => (
  <footer className="bg-[#080f24] border-t border-white/5 py-20 mt-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="mb-6">
            <Logo />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Curadoria técnica independente de hardware para upgrades. 
            Focamos em performance real e transparência absoluta para o usuário final.
          </p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-white font-headline text-xs font-bold uppercase tracking-[0.2em] mb-6">Navegação</h3>
          <ul className="text-slate-400 text-sm space-y-4">
            <li><button onClick={() => setPage('guias')} className="hover:text-white transition-colors">Guias Técnicos</button></li>
            <li><button onClick={() => setPage('produtos')} className="hover:text-white transition-colors">Componentes</button></li>
            <li><button onClick={() => setPage('transparencia')} className="hover:text-white transition-colors">Transparência</button></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-white font-headline text-xs font-bold uppercase tracking-[0.2em] mb-6">Afiliados</h3>
          <p className="text-slate-500 text-xs leading-relaxed italic">
            Participamos de programas de afiliados. Compras via links geram comissões que sustentam nossas análises sem custo extra para você.
          </p>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] uppercase tracking-widest font-bold">
        <span>&copy; {new Date().getFullYear()} Hardware Hub</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

const AffiliateDisclosure = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="text-center py-4 border-b border-white/5 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
    <i className="fas fa-info-circle mr-2 text-[#265aed]/60"></i>
    Utilizamos links de afiliados. Saiba mais na nossa <button onClick={() => setPage('transparencia')} className="text-white hover:underline">política de transparência</button>.
  </div>
);

// Pages
const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <main className="container mx-auto px-6 py-24">
    <section className="text-center max-w-4xl mx-auto mb-32">
      <h1 className="text-5xl md:text-7xl font-headline mb-8 leading-[1.1] tracking-tight text-white">
        Upgrade inteligente.<br />
        <span className="gradient-text">Performance real.</span>
      </h1>
      <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
        Curadoria técnica simplificada para quem busca o melhor hardware sem ruído de marketing.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button onClick={() => setPage('produtos')} className="bg-[#265aed] hover:bg-[#1c49c7] text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105">
          Explorar Hardware
        </button>
        <button onClick={() => setPage('guias')} className="text-white hover:text-[#265aed] px-10 py-4 font-bold transition-colors">
          Ver Guias <i className="fas fa-arrow-right ml-2 text-xs"></i>
        </button>
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="group">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 mb-6 group-hover:bg-[#265aed]/10 transition-colors">
          <i className="fas fa-microchip text-[#265aed]"></i>
        </div>
        <h3 className="text-lg font-headline font-bold mb-4 text-white">Curadoria Técnica</h3>
        <p className="text-slate-500 text-sm leading-relaxed">Seleção baseada em specs reais e benchmarks, focada na longevidade do seu setup.</p>
      </div>
      <div className="group">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 mb-6 group-hover:bg-[#265aed]/10 transition-colors">
          <i className="fas fa-compass text-[#265aed]"></i>
        </div>
        <h3 className="text-lg font-headline font-bold mb-4 text-white">Direto ao Ponto</h3>
        <p className="text-slate-500 text-sm leading-relaxed">Sem "economês" ou termos técnicos desnecessários. Informação útil para sua decisão.</p>
      </div>
      <div className="group">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 mb-6 group-hover:bg-[#265aed]/10 transition-colors">
          <i className="fas fa-link text-[#265aed]"></i>
        </div>
        <h3 className="text-lg font-headline font-bold mb-4 text-white">Marketplace Seguro</h3>
        <p className="text-slate-500 text-sm leading-relaxed">Links diretos para as lojas mais confiáveis do país com os melhores preços.</p>
      </div>
    </section>
  </main>
);

const GuidesPage = ({ guides }: { guides: Guide[] }) => (
  <main className="container mx-auto px-6 py-24 max-w-5xl">
    <div className="mb-20">
      <h1 className="text-4xl font-headline font-bold mb-4 text-white">Guias de Upgrade</h1>
      <p className="text-slate-500 text-lg">Conhecimento essencial antes de abrir a carteira.</p>
    </div>
    <div className="space-y-16">
      {guides.map(guide => (
        <article key={guide.id} className="group border-b border-white/5 pb-16 last:border-0">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <span className="text-[#265aed] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">{guide.category}</span>
              <h2 className="text-2xl font-headline font-bold mb-4 text-white group-hover:text-[#265aed] transition-colors">{guide.title}</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light italic">{guide.excerpt}</p>
              <div className="text-slate-500 text-sm leading-loose whitespace-pre-line">
                {guide.content}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </main>
);

const ProductsPage = ({ products }: { products: Product[] }) => (
  <main className="container mx-auto px-6 py-24">
    <div className="mb-20">
      <h1 className="text-4xl font-headline font-bold mb-4 text-white">Hardware Selecionado</h1>
      <p className="text-slate-500 text-lg">Os melhores em cada categoria, sem distrações.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
      {products.map(product => (
        <div key={product.id} className="flex flex-col group">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#265aed] bg-[#265aed]/5 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h3 className="text-xl font-headline font-bold mb-4 text-white group-hover:text-[#265aed] transition-colors">{product.name}</h3>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">{product.description}</p>
          <div className="flex gap-3">
            {product.links.amazon && (
              <a href={product.links.amazon} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white hover:bg-slate-200 text-black text-center py-3 rounded-xl font-bold transition-all text-xs">
                Amazon
              </a>
            )}
            {product.links.mercadolivre && (
              <a href={product.links.mercadolivre} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/5 hover:bg-white/10 text-white text-center py-3 rounded-xl font-bold transition-all text-xs border border-white/5">
                Mercado Livre
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </main>
);

const ArticlesPage = () => {
  const articles: Article[] = [
    { id: '1', title: 'Como identificar o gargalo do seu PC', excerpt: 'Pare de desperdiçar dinheiro em peças que não vão resolver seus travamentos.', date: '10 Out 2023', readingTime: '5 min' },
    { id: '2', title: 'PCI Express 4.0 vs 5.0: Vale a pena?', excerpt: 'O que muda na prática para o carregamento de jogos e renderização.', date: '05 Out 2023', readingTime: '4 min' },
    { id: '3', title: 'Latência vs Frequência de Memória', excerpt: 'Por que o CL14 pode ser melhor que o CL18 de maior frequência.', date: '28 Set 2023', readingTime: '6 min' }
  ];

  return (
    <main className="container mx-auto px-6 py-24 max-w-4xl">
      <div className="mb-20">
        <h1 className="text-4xl font-headline font-bold mb-4 text-white">Artigos</h1>
        <p className="text-slate-500 text-lg">Leituras técnicas sem enrolação.</p>
      </div>
      <div className="space-y-12">
        {articles.map(article => (
          <article key={article.id} className="group cursor-pointer">
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4">
              <span>{article.date}</span>
              <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
              <span>{article.readingTime} de leitura</span>
            </div>
            <h2 className="text-2xl font-headline font-bold mb-3 text-white group-hover:text-[#265aed] transition-colors">{article.title}</h2>
            <p className="text-slate-500 leading-relaxed text-sm max-w-2xl">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

const TransparencyPage = () => (
  <main className="container mx-auto px-6 py-24 max-w-3xl">
    <h1 className="text-4xl font-headline font-bold mb-12 text-white">Transparência</h1>
    <section className="space-y-10 text-slate-400 leading-loose">
      <p className="text-lg text-slate-300">
        O projeto <strong className="text-white">Hardware Hub</strong> nasceu para ser um filtro contra o excesso de informação e marketing enviesado no mundo do PC Gaming.
      </p>
      <div className="space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#265aed]">Nossa Monetização</h2>
        <p>
          Não vendemos banners, não aceitamos patrocínios de marcas para análises e não temos anúncios invasivos. Nossa única forma de sustento são as <strong>comissões de afiliados</strong>.
        </p>
      </div>
      <div className="space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#265aed]">O Compromisso</h2>
        <ul className="space-y-4">
          <li className="flex gap-4">
            <span className="text-white font-bold">01.</span>
            <span>O preço do produto é idêntico para você, com ou sem nosso link.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-white font-bold">02.</span>
            <span>Só recomendamos o que realmente entrega performance sólida.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-white font-bold">03.</span>
            <span>Nossa curadoria é 100% independente e guiada por dados.</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
);

// Main App component
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    import('./data/products.json').then(data => setProducts(data.default));
    import('./data/guides.json').then(data => setGuides(data.default));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderContent = () => {
    switch(activePage) {
      case 'home': return <Home setPage={setActivePage} />;
      case 'guias': return <GuidesPage guides={guides} />;
      case 'produtos': return <ProductsPage products={products} />;
      case 'artigos': return <ArticlesPage />;
      case 'transparencia': return <TransparencyPage />;
      default: return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#265aed] selection:text-white bg-[#080f24]">
      <AffiliateDisclosure setPage={setActivePage} />
      <Navbar activePage={activePage} setPage={setActivePage} />
      <div className="flex-grow">
        {renderContent()}
      </div>
      <Footer setPage={setActivePage} />
    </div>
  );
}
