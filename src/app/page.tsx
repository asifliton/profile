export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Something amazing is in the works
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
            We are working hard to bring you something special. 
            Stay tuned for updates and be the first to know when we launch.
          </p>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          
          {/* Status */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Under Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}
