export const Footer = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1024px] pb-8 pt-12">
      <footer className="mt-auto">
        <div className="h-px w-full bg-graphite/10 mb-3"></div>
        <span className="text-sm text-graphite/30">
          © YNews, {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
};
