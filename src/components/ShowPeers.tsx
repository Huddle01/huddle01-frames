import { PreviewPeer, previewPeersMetadata } from '@/utils/types';
import { Client } from '@huddle01/server-sdk/client';

const ShowPeers = ({ previewPeers }: previewPeersMetadata) => {
  const peersMetadata = [
    {
      displayName: 'vraj.eth',
    },
    {
      displayName: 'axit.eth',
    },
    {
      displayName: 'deepso.eth',
    },
  ];

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <span tw='font-bold text-4xl mt-4 text-white'>Huddle01</span>
      <div tw='flex-wrap flex items-center justify-center gap-4 w-full m-6'>
        {peersMetadata.map((peer) => (
          <div tw='flex flex-col text-center gap-1' key={peer.displayName}>
            <div tw='flex items-center justify-center text-3xl font-semibold w-24 h-24 rounded-full text-white bg-gray-800'>
              {peer.displayName[0].toUpperCase()}
            </div>
            <span tw='text-white'>{peer.displayName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPeers;
