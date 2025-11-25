import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const cacheDir = join(process.cwd(), '.next', 'cache');

try {
    if (existsSync(cacheDir)) {
        rmSync(cacheDir, { recursive: true, force: true });
        console.log(`Removed oversized cache folder at ${cacheDir}`);
    } else {
        console.log('No .next/cache directory found, skipping cleanup.');
    }
} catch (error) {
    console.warn('Failed to clean .next/cache. Deployment may still fail.', error);
    process.exitCode = 0; // keep build succeeding even if cleanup fails
}

