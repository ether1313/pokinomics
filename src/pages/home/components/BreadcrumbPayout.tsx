
export default function BreadcrumbPayout() {
  const items = [
    { label: 'General Info', id: 'quick-review' },
    { label: 'Recommended Payout Casinos', id: 'recommended-payout-casino' },
    { label: 'Payout Casinos Categories', id: 'fastpayout-table' },
    { label: 'Popular Payout Casinos', id: 'top-list-payout' },
    { label: 'Comparison Payout Pokies ', id: 'popular-pokies' },
    { label: 'FAQs', id: 'payout-faqs' },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-1 px-4 py-3 min-w-max">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => handleClick(item.id)}
                  className="text-xs md:text-sm text-gray-700 hover:text-[#002147] whitespace-nowrap transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
                {index < items.length - 1 && (
                  <span className="text-gray-500 text-sm mx-2">&gt;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
