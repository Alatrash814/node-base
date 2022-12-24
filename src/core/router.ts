import express from 'express'

export const router = express.Router

export const registerRoutes = (routes: express.Router[]) => {
    for (let i in routes) {
        routes[i]
    }
}