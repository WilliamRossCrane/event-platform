# 📄 Project Retrospective

## What Went Well

- **Technical decisions that worked**  
  Taking a careful, iterative approach throughout development really paid off. I wrote the code myself without AI guidance for most of the project, following tutorials step by step and testing as I went. The only time I got stuck was at the end with the EventModel, which I used AI to help update. Using separate branches and PRs kept the workflow streamlined and made the development process smoother.  

- **Tools or workflows that improved development**  
  I trialled the Warp IDE, which was interesting as it’s AI-assisted in a different way than ChatGPT or Copilot. CodeRabbit for pull requests was excellent, helping me review changes and visualise file connections. PostHog tracking proved very useful for live analytics and is something I’d continue using.  

---

## Challenges & Trade-offs

- **Key technical or learning challenges**  
  Random bugs popped up, especially around Vercel deployment and TypeScript. One small but confusing issue was using `npm build` instead of `npm dev`, this impacted the base URL. Server configuration ended up being the hardest part of the project, which is ironic because it was a small part of the tutorial. 

---

## Key Learnings

- **New concepts or technologies learned**  
  - Server configuration basics  
  - Async programming in JavaScript/TypeScript  
  - Client-side rendering  
  - Nested and dynamic routing using slugs  
  - Route groups in Next.js  

- **Deeper understanding gained during development**  
  Focusing on care and attention to detail improved my workflow and code quality. Working with Git branches helped me manage changes safely, and experimenting with dynamic routing expanded my understanding of Next.js features, Cache was also a cool tool even if it did break my project ALOTTTT.

---

## Skills Improved

- **Technical:** Frontend and backend development (Specifically Database Management), debugging, tooling  
- **Workflow:** Git version control, iterative development, best practices  

---

## Industry Practices Applied

- Consistent project structure and coding standards  
- Environment configuration, deployment, and performance optimisation (Learnt though I shouldnt use LocalHost:3000
- Analytics and user tracking with PostHog  

---

## What I’d Do Differently

- Very happy with this project, but do more of the project from home as opposed a codespace at work, I think the learning from the project didnt sink in as well when I was at work. 

---

## Next Steps

- Add new features or refine existing ones (Specifically could add a Log in System with Admin Dashboard to manage events and user login to track event history) 
