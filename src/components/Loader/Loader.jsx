export default function Loader({ type = 'spinner', skeletonShape = 'rectangle' }) {
  if (type === 'spinner') {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const getSkeletonStyles = () => {
    switch (skeletonShape) {
      case 'circle':
        return 'rounded-full';
      case 'text':
        return 'h-4 rounded';
      default:
        return 'rounded-lg';
    }
  };

  return (
    <div className="animate-pulse">
      <div className={`bg-surface-variant ${getSkeletonStyles()} h-8 w-full`}></div>
    </div>
  );
}
