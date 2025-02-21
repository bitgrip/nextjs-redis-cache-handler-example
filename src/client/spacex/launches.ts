import { cacheLife } from "next/dist/server/use-cache/cache-life";

interface LaunchData {
  id: string;
  name: string;
  date_utc: string;
  details: string | null;
  success: boolean;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
  };
  cacheStatus: string;
  fetchedAt: string;
  duration: string;
}

export async function getLatestLaunch(): Promise<LaunchData> {
  'use cache'
  cacheLife('fetch')

  console.log('Initiating fetch for SpaceX latest launch');
  const startTime = performance.now();
  
  try {
    const response = await fetch('https://api.spacexdata.com/v5/launches/latest');

    const endTime = performance.now();
    const duration = endTime - startTime;    
    const responseSize = response.headers.get('content-length');
    
    console.log({
      url: 'https://api.spacexdata.com/v5/launches/latest',
      duration: `${duration.toFixed(2)}ms`,
      responseSize,
      status: response.status + ' ' + response.statusText,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SpaceX launch data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { 
      ...data, 
      fetchedAt: new Date(startTime).toISOString(),
      duration: duration.toFixed(2),
    };
  } catch (error) {
    console.error('Error fetching SpaceX launch data:', error);
    throw error;
  }
}