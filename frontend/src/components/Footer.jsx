const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-white italic mb-8 uppercase tracking-tighter">AUTO<span className="text-red-600">VAULT.</span></h2>
        <div className="flex justify-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 mb-10">
          <a href="#">Gallery</a> <a href="#">Socials</a> <a href="#">Terms</a>
        </div>
        <p className="text-[9px] text-gray-800 font-bold uppercase tracking-widest">© 2026 AUTOVAULT TEMPLATE • BY YOURNAME</p>
      </div>
    </footer>
  );
};

export default Footer;