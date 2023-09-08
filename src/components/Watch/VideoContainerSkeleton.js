import React from 'react'
import VideoRendererSkeleton from './VideoRendererSkeleton'
import VideoDetailsSkeleton from './VideoDetailsSkeleton'

const VideoContainerSkeleton = () => {
  return (
    <div className='w-full h-full'>
        <VideoRendererSkeleton />
        <VideoDetailsSkeleton />
      </div>
  )
}

export default VideoContainerSkeleton