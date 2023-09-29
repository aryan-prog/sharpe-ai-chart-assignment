# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


This app is made as an assignment for recruitment process at Sharpe-AI.

The assignment statement is as follows:
1. Make a call to the following API: https://api.llama.fi/summary/fees/lyra?dataType=dailyFees
2. From the returned data, use the data inside "totalDataChart" parameter to plot a chart on the frontend.
Sample data looks like this - [[1660953600,8496],[1661040000,3709]] where first element of the sub list (ex 1660953600, 1661040000) is the timestamp which should be converted to human readable format and plotted on x axis, and other values (8496, 3709 etc) are to be plotted on y axis.
3. Feel free to use an appropriate javascript library for charting. Be creative with the chart design. Use your best judgement to resolve any errors and document the same.
4. Ideally it should be possible to hover over the chart to see values. See attached "Screenshot" for reference.

## Live Demo

Experience the live version of the AI-Summarizer at [Live Demo](https://charts-sharpe.netlify.app/).