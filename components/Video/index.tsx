import * as React from 'react'
import { useEffect, useRef } from 'react';
import './VideoWrapper.module.css'
// import { FirestoreProvider } from "@react-firebase/firestore";

type RangeType = {
  min: number;
  max: number;
} | {
  exact: number;
};

type VideoWrapperType = {
  className?: string;
  width?: number | RangeType;
  height?: number | RangeType;
};

/*
 * Description of function
 * @param props
 */
const VideoWrapper: React.FC<VideoWrapperType> = ({ className = '' }: VideoWrapperType) => {
  // Stream
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);
  // DOM Elements
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const init = async (): Promise<void> => {
      const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
      if(localVideoRef?.current == null || remoteVideoRef.current == null) 
        return console.error('No local video reference');
      localVideoRef.current.srcObject = stream;
      localStreamRef.current = stream;
      remoteStreamRef.current = new MediaStream();
      remoteVideoRef.current.srcObject = remoteStreamRef.current;
      console.log('Stream:', localVideoRef?.current?.srcObject);
    }
    init();
  }, []);

  return (
    <div className={`video-wrapper ${className}`}>
      <video ref={localVideoRef} muted autoPlay playsInline/>
      <video ref={remoteVideoRef} autoPlay playsInline/>
  </div>)
};

export default VideoWrapper;
