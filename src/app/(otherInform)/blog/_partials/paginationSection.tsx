import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationSection: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg ${
            i === currentPage
              ? "bg-[#1A4D2E] text-white"
              : "bg-white text-[#1A4D2E]"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-4 py-2 bg-white text-[#1A4D2E] disabled:opacity-50"
      >
        <GrFormPreviousLink />
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-4 py-2 bg-white text-[#1A4D2E] disabled:opacity-50"
      >
        Next
        <GrFormNextLink />
      </button>
    </div>
  );
};

export default PaginationSection;
