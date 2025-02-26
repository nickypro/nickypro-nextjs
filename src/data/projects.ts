export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  date: string;
}

export const projects: Project[] = [
  {
    title: "ParaScopes: Using Residual Stream Decoders to find Planning in Language Models",
    description: "Helped understand and decode how LLMs \"plan\" information by analyzing and decoding single-token residual stream activations. Used 2 different methods: 1) using the original model to decode the residuals stream, and 2) using a map to text auto-encoder space. ",
    image: "/images/projects/parascopes-top.png",
    link: "https://link.nicky.pro/parascopes",
    tags: ["ParaScopes", "Residual Stream Decoders", "Transformers", "Machine Learning", "Python", "Model Interpretability"],
    date: "2025-02"
  },
  {
    title: "Extracting Paragraphs from LLM Token Activations",
    description: "Investigated how language models encode and plan paragraph-level information by analyzing single-token activations. Developed methods to extract and transfer contextual information between different prompts using activation patching techniques. Demonstrated that models maintain strong contextual awareness during text generation.",
    image: "/images/projects/extracting-paragraphs.png",
    link: "https://arxiv.org/pdf/2409.06328",
    tags: ["NeurIPS Workshop", "NLP", "Transformers", "Machine Learning", "Python", "Model Interpretability"],
    date: "2024-09"
  },
  {
    title: "Dissecting Language Models: Machine Unlearning via Selective Pruning",
    description: "Introduced a novel machine unlearning method for LLMs that uses selective pruning to remove specific capabilities while retaining others. The method identifies and removes neurons based on their relative importance to targeted capabilities vs overall network performance. Demonstrated state-of-the-art results in selective capability removal while maintaining model performance on other tasks.",
    image: "/images/projects/separability3.png",
    link: "https://arxiv.org/pdf/2403.01267",
    tags: ["NeurIPS Workshop", "Machine Learning", "PyTorch", "Language Models", "Model Interpretability", "Python"],
    date: "2023-07"
  },
  {
    title: "Modularity in Transformers: Investigating Neuron Separability & Specialization",
    description: "Researched modularity and task specialization within transformer architectures, focusing on both vision and language models. Combined selective pruning and clustering techniques to analyze how different neurons specialize in various tasks. Found evidence of task-specific neuron clusters with varying degrees of overlap between related tasks.",
    image: "/images/projects/modularity2.png",
    link: "https://arxiv.org/pdf/2408.17324",
    tags: ["Machine Learning", "Vision Transformers", "Language Models", "Python", "Model Interpretability"],
    date: "2024-04"
  },
  {
    title: "Investigating Neuron Ablation in Attention Heads",
    description: "Developed a novel 'peak ablation' method for analyzing attention mechanisms in transformer models. Compared different neuron ablation techniques and their effects on model performance. Research provided insights into how attention neurons represent information and how different ablation methods affect model behavior.",
    image: "/images/projects/ablation.png",
    link: "https://arxiv.org/pdf/2408.17322",
    tags: ["XAI World Conference", "Machine Learning", "Transformers", "Model Interpretability", "Python", "Research"],
    date: "2024-04"
  },
  {
    title: "Machine Learning for Many-Spin Quantum Systems",
    description: "Worked on finding the ground state of quantum spins in different lattice configurations using different algorithms, in particular, looking at how different neural network models may be a way of getting better results.",
    image: "/images/projects/fyp.png",
    link: "https://docs.google.com/presentation/d/1gVYEDAQ2_-K7U6ArvHsWF2qyG7wdKzypgr15CGYewNk/edit?usp=sharing",
    tags: ["Python", "NetKet", "Machine Learning", "Quantum Physics"],
    date: "2021-12"
  },
  {
    title: "Meteor Website",
    description: "Created an automated website for looking through a database of meteor images and allowing user input",
    image: "/images/projects/meteor-website.png",
    link: "https://www.dunsink.dias.ie/citizen-science/meteor-observations/",
    tags: ["MySQL", "React", "NodeJS", "Bash"],
    date: "2020-07"
  },
  {
    title: "Painless Journal App",
    description: "Worked in a team to develop a Flutter App for tracking and managing chronic pain symptoms",
    image: "/images/projects/painless-journal.png",
    link: "https://painlessjournal.nicky.pro/",
    tags: ["Dart", "Flutter", "Cloud Firebase"],
    date: "2020-08"
  },
  {
    title: "Society Events Website",
    description: "A website that scrapes and saves data from facebook to connect students to events in Trinity College.",
    image: "/images/projects/society-events-page.png",
    link: "http://society.events",
    tags: ["NodeJs", "React", "MySQL"],
    date: "2019-10"
  },
  {
    title: "SGX Twilio",
    description: "Created a bridge from twilio phone numbers to XMPP to the specification of Soprani.ca that allows the use of twilio phone numbers for normal texting.",
    image: "/images/projects/sgx-twilio.png",
    link: "https://github.com/pesvut/sgx-twilio",
    tags: ["Redis", "NodeJS"],
    date: "2021-09"
  },
  {
    title: "Ray Tracing Physics Project",
    description: "Studied the physics of ray-tracing simulation in a team and built a C++ program to better study implementation.",
    image: "/images/projects/ray-tracing-image.png",
    link: "https://old.nicky.pro/physicsProject2019.html",
    tags: ["C++", "Physics", "Ray Tracing"],
    date: "2019-11"
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "A tool for visualising common sorting algorithms: Merge, Quick, Heap & Bubble Sort.",
    image: "/images/projects/sort-algorithm.png",
    link: "https://widgets.nicky.pro/sort",
    tags: ["React", "Hooks", "Styled-components"],
    date: "2020-01"
  },
  {
    title: "Rigid Body Simulation",
    description: "Created a 3D interactive rigid-body simulator using advanced integration techniques, such as Green's Theorem.",
    image: "/images/projects/rigid-body-sim.png",
    link: "http://old.nicky.pro/researchProject2019.html",
    tags: ["Java", "Processing", "g4p"],
    date: "2019-08"
  }
];
