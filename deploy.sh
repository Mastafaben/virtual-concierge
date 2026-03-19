#!/bin/bash

# Push to GitHub
git add .
git commit -m "Deploy update"
git push origin main

# Deploy backend
cd server
railway up

# Deploy frontend
cd ../client
vercel --prod