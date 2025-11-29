import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

// Helper to find all index.html files in demos folder
function getHtmlEntries() {
    const pages = {
        main: resolve(__dirname, 'index.html')
    }

    const demosDir = resolve(__dirname, 'demos')

    if (fs.existsSync(demosDir)) {
        const demoFolders = fs.readdirSync(demosDir)
        demoFolders.forEach(folder => {
            const htmlPath = resolve(demosDir, folder, 'index.html')
            if (fs.existsSync(htmlPath)) {
                pages[folder] = htmlPath
            }
        })
    }

    return pages
}

export default defineConfig({
    base: '/',
    build: {
        rollupOptions: {
            input: getHtmlEntries()
        }
    }
})
