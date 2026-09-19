/* ==========================================================================
   TENSORARCADE: CURATED RESOURCE DATABASE
   Synthesized from roadmap.sh, Aadi1011 GitHub, Google Doc 10 College Lectures,
   Reddit FAANG Applied Scientist, interviewing.io, and Scaler Roadmap.
   ========================================================================== */

const RESOURCES_DATA = [
  // --------------------------------------------------------------------------
  // MATHEMATICS & FOUNDATIONS
  // --------------------------------------------------------------------------
  {
    id: 'res-math-1',
    title: 'Essence of Linear Algebra',
    creator: '3Blue1Brown (Grant Sanderson)',
    category: 'video',
    track: 'math',
    difficulty: 'Beginner',
    duration: '16 videos (~3.5 hrs)',
    url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
    isVerified: true,
    description: 'The world-famous animated series providing geometric intuition for vectors, linear transformations, matrix multiplication, determinants, eigenvalues, and eigenvectors.',
    tags: ['Linear Algebra', 'Vectors', 'Eigenvalues', 'Visual Intuition'],
    syllabus: [
      'Vectors: what even are they? (Physics, CS, and Math perspectives)',
      'Linear combinations, span, and basis vectors',
      'Linear transformations and their connection to matrices',
      'Matrix multiplication as composition of linear transformations',
      'The Determinant: area scaling factor and geometric meaning',
      'Inverse matrices, column space, and null space',
      'Dot products and duality; Cross products in light of linear transformations',
      'Eigenvectors and eigenvalues: axes of rotation and stretch factors'
    ],
    deepDive: 'Why Grant Sanderson’s visual approach matters: Machine learning papers frequently use linear algebra as notation, but high-dimensional intuitions fail unless you have a crystal-clear geometric mental model. Watch this before MIT 18.06.'
  },
  {
    id: 'res-math-2',
    title: 'MIT 18.06: Linear Algebra',
    creator: 'Prof. Gilbert Strang (MIT OCW)',
    category: 'course',
    track: 'math',
    difficulty: 'Intermediate',
    duration: '35 lectures (~35 hrs)',
    url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
    isVerified: true,
    description: 'The legendary college linear algebra backbone for AI/ML. Covers four fundamental subspaces, orthogonality, projection matrices, eigenvalues, SVD, and positive definite matrices.',
    tags: ['MIT', 'Linear Algebra', 'SVD', 'Subspaces', 'Orthogonality'],
    syllabus: [
      'Geometry of linear equations, elimination with matrices, matrix operations',
      'Vector spaces and subspaces: Nullspace, Column space, Row space',
      'Orthogonality, Gram-Schmidt orthogonalization, and Projection operators',
      'Properties of determinants and Cramer’s Rule',
      'Eigenvalues, eigenvectors, and diagonalization of matrices',
      'Symmetric matrices, positive definite matrices, and tests for positiveness',
      'Singular Value Decomposition (SVD): A = U Σ V^T and low-rank approximation',
      'Applications to PCA, linear transformations, and pseudo-inverses'
    ],
    deepDive: 'Cited by FAANG Applied Scientists as the single most critical linear algebra course. Strang’s emphasis on the Four Fundamental Subspaces and SVD is directly tested in research scientist and MLE interviews.'
  },
  {
    id: 'res-math-3',
    title: 'MIT RES.6-012: Introduction to Probability',
    creator: 'Prof. John Tsitsiklis (MIT OCW)',
    category: 'course',
    track: 'math',
    difficulty: 'Intermediate',
    duration: 'Full Semester (~40 hrs)',
    url: 'https://ocw.mit.edu/courses/res-6-012-introduction-to-probability-spring-2018/',
    isVerified: true,
    description: 'The gold standard probabilistic foundation for Machine Learning: conditioning, Bayes theorem, random variables, joint distributions, Markov chains, and inference.',
    tags: ['Probability', 'Bayes Rule', 'Random Variables', 'Markov Chains', 'MIT'],
    syllabus: [
      'Sample space, probability axioms, conditioning, and total probability theorem',
      'Bayes’ rule, independence, and conditional independence',
      'Discrete random variables: PMFs, expectations, variance, and moments',
      'Continuous random variables: PDFs, CDFs, and Gaussian distributions',
      'Joint distributions, conditioning on random variables, covariance, and correlation',
      'Laws of large numbers and Central Limit Theorem (CLT)',
      'Classical statistical inference, Bayesian inference, and Maximum a Posteriori (MAP)'
    ],
    deepDive: 'Required by top ML labs. Understanding generative AI, Bayesian neural networks, diffusion processes, and loss expectations requires this level of rigorous probabilistic thinking.'
  },
  {
    id: 'res-math-4',
    title: 'Stanford CS109: Probability for Computer Scientists',
    creator: 'Stanford University (Prof. Chris Piech)',
    category: 'course',
    track: 'math',
    difficulty: 'Beginner',
    duration: '10 weeks (~30 hrs)',
    url: 'https://web.stanford.edu/class/cs109/',
    isVerified: true,
    description: 'A CS-flavored introduction to probability with programming applications in Python. Covers combinatorics, discrete/continuous RVs, Naive Bayes, and probabilistic modeling.',
    tags: ['Stanford', 'Probability', 'Python', 'Naive Bayes', 'Inference'],
    syllabus: [
      'Combinatorics, counting, permutations, combinations',
      'Independence, conditional probability, Law of Total Probability',
      'Random variables, expectations, Bernoulli, Binomial, Poisson',
      'Uniform, Exponential, and Normal distributions',
      'Joint probability distributions and covariance',
      'Parameter estimation: Maximum Likelihood Estimation (MLE)',
      'Applications: Machine learning classification with Naive Bayes'
    ],
    deepDive: 'Ideal if you want to learn probability through code. Includes real Python assignments showing how probability translates directly to machine learning classification.'
  },
  {
    id: 'res-math-5',
    title: 'MIT 18.S096: Matrix Calculus for ML & Beyond',
    creator: 'Prof. Alan Edelman (MIT OCW, Jan 2023)',
    category: 'course',
    track: 'math',
    difficulty: 'Advanced',
    duration: '12 lectures (~15 hrs)',
    url: 'https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/',
    isVerified: true,
    description: 'Modern matrix calculus specifically designed for deriving deep learning backpropagation, Jacobians, Kronecker products, and factorizations in research papers.',
    tags: ['Matrix Calculus', 'Backpropagation', 'Jacobians', 'MIT', 'Research'],
    syllabus: [
      'Derivatives of scalar functions with respect to vectors and matrices',
      'Total derivatives, Jacobians, and chain rule in matrix notation',
      'Gradients of matrix factorizations (SVD, QR, Cholesky)',
      'Hessian matrices and vector-Hessian products',
      'Kronecker products, vec operators, and tensor calculus for deep learning'
    ],
    deepDive: 'Recommended by FAANG Applied Scientists. When reading NeurIPS/ICLR papers or deriving backpropagation through complex attention tensors, standard scalar calculus is too slow. This course bridges the gap.'
  },
  {
    id: 'res-math-6',
    title: 'Convex Optimization (Free Textbook)',
    creator: 'Stephen Boyd & Lieven Vandenberghe (Stanford)',
    category: 'book',
    track: 'math',
    difficulty: 'Advanced',
    duration: '700+ pages (Free PDF)',
    url: 'https://stanford.edu/~boyd/cvxbook/',
    isVerified: true,
    description: 'The definitive textbook on convex optimization. Covers convex sets, convex functions, duality theory, KKT optimality conditions, interior-point methods, and SGD.',
    tags: ['Optimization', 'Convex Sets', 'KKT Conditions', 'Stanford', 'Free Book'],
    syllabus: [
      'Convex sets, hyperplanes, polyhedra, and positive semidefinite cones',
      'Convex functions, operations preserving convexity, conjugates',
      'Convex optimization problems, linear programming, quadratic programming',
      'Lagrangian duality, Slater’s condition, and Karush-Kuhn-Tucker (KKT) conditions',
      'Unconstrained optimization: Gradient descent, Newton’s method',
      'Equality & inequality constrained optimization; Interior-point methods'
    ],
    deepDive: 'Freely available from Stanford. Powers the theoretical proofs behind Support Vector Machines, regularized regression (Lasso/Ridge), and modern training stability.'
  },

  // --------------------------------------------------------------------------
  // PYTHON, DATA TOOLS & SCIENTIFIC COMPUTING
  // --------------------------------------------------------------------------
  {
    id: 'res-py-1',
    title: 'Python for Data Analysis (3rd Edition)',
    creator: 'Wes McKinney (Creator of Pandas)',
    category: 'book',
    track: 'python',
    difficulty: 'Beginner',
    duration: 'Full Free Web Book',
    url: 'https://wesmckinney.com/book/',
    isVerified: true,
    description: 'Written by the author of pandas, this freely available online book is the definitive practical guide to NumPy, pandas, data cleaning, time series, and visualization.',
    tags: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Free Book'],
    syllabus: [
      'Python language essentials, IPython shell, and Jupyter notebooks',
      'NumPy basics: arrays and vectorized computation',
      'Getting started with pandas data structures (Series and DataFrame)',
      'Data loading, storage, and file formats (CSV, JSON, Parquet)',
      'Data cleaning, missing values, string manipulation, and transformations',
      'Data wrangling: join, combine, reshape, and pivot tables',
      'Plotting and visualization with matplotlib and seaborn'
    ],
    deepDive: 'The most authoritative resource on data manipulation in Python, maintained directly on the author’s website.'
  },
  {
    id: 'res-py-2',
    title: 'Harvard CS50P: Programming with Python',
    creator: 'Prof. David J. Malan (Harvard University)',
    category: 'course',
    track: 'python',
    difficulty: 'Beginner',
    duration: '10 weeks (~25 hrs)',
    url: 'https://cs50.harvard.edu/python/',
    isVerified: true,
    description: 'Harvard’s premier introduction to programming with Python. Teaches clean functions, variables, conditionals, loops, exceptions, libraries, unit testing, and file I/O.',
    tags: ['Harvard', 'Python', 'Fundamentals', 'Unit Testing', 'Free Course'],
    syllabus: [
      'Functions, variables, and scope',
      'Conditionals, boolean expressions, and branching logic',
      'Loops: while, for, and list comprehensions',
      'Exceptions, handling errors gracefully, and debugging',
      'Libraries, packages, pip, and virtual environments',
      'Unit tests with pytest; File I/O (CSV, binary); Object-Oriented Programming'
    ],
    deepDive: 'Great for engineers coming from other languages or beginners who want clean, idiomatic Python habits.'
  },
  {
    id: 'res-py-3',
    title: 'NumPy Illustrated: Visual Guide to NumPy',
    creator: 'Lev Maximov',
    category: 'guide',
    track: 'python',
    difficulty: 'Beginner',
    duration: '1 hr read',
    url: 'https://betterprogramming.pub/numpy-illustrated-the-visually-grounded-guide-to-vector-processing-in-python-934f0f762d31',
    isVerified: true,
    description: 'A visual masterpiece explaining multidimensional indexing, slicing, broadcasting, stacking, and tensor dimension manipulations with color diagrams.',
    tags: ['NumPy', 'Broadcasting', 'Tensors', 'Visual Guide'],
    syllabus: [
      '1D, 2D, and 3D array creation and shapes',
      'Indexing and slicing conventions across multiple axes',
      'Broadcasting rules visualized step-by-step',
      'Matrix multiplication: @ operator vs element-wise *',
      'Reshaping, transposing, flattening, and memory layouts (C vs Fortran order)'
    ],
    deepDive: 'The clearest visual explanation of broadcasting rules anywhere on the internet.'
  },

  // --------------------------------------------------------------------------
  // CLASSICAL MACHINE LEARNING
  // --------------------------------------------------------------------------
  {
    id: 'res-cml-1',
    title: 'Stanford CS229: Machine Learning',
    creator: 'Prof. Andrew Ng (Stanford Online)',
    category: 'course',
    track: 'classical-ml',
    difficulty: 'Intermediate',
    duration: '20 lectures (~30 hrs)',
    url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU',
    isVerified: true,
    description: 'The world benchmark in machine learning education. Full theoretical derivations of Supervised Learning, GLMs, SVMs, Kernels, Learning Theory, and Unsupervised Learning.',
    tags: ['Stanford', 'Andrew Ng', 'CS229', 'Supervised Learning', 'Kernels'],
    syllabus: [
      'Supervised Learning: Linear Regression, LMS algorithm, Normal Equations',
      'Classification: Logistic Regression, Newton’s Method, Perceptron',
      'Generalized Linear Models (GLMs) and Exponential Families',
      'Generative Learning Algorithms: Gaussian Discriminant Analysis, Naive Bayes',
      'Support Vector Machines (SVMs): Functional/geometric margins, Dual problem, Kernels',
      'Learning Theory: Bias/variance tradeoff, Union bounds, VC Dimension',
      'Unsupervised Learning: K-Means, Mixture of Gaussians, EM algorithm, Factor Analysis, PCA'
    ],
    deepDive: 'Featured in both the Google Doc 10 Free Lectures and the Reddit Applied Scientist roadmap. Andrew Ng’s lecture derivations on the chalkboard build deep mathematical intuition.'
  },
  {
    id: 'res-cml-2',
    title: 'StatQuest Machine Learning & Statistics Playlist',
    creator: 'Josh Starmer (StatQuest)',
    category: 'video',
    track: 'classical-ml',
    difficulty: 'Beginner',
    duration: '80+ short videos (~15 hrs)',
    url: 'https://www.youtube.com/c/joshstarmer',
    isVerified: true,
    description: 'Josh Starmer breaks down complex machine learning algorithms into bite-sized, step-by-step visual lessons with zero skipped steps. Covers PCA, Random Forests, XGBoost, and ROC curves.',
    tags: ['StatQuest', 'PCA', 'Random Forest', 'XGBoost', 'Intuition'],
    syllabus: [
      'Linear Regression and Multiple Regression step-by-step',
      'Logistic Regression, Odds, Log-Odds, and Maximum Likelihood',
      'Decision Trees, Random Forests, and Bagging',
      'AdaBoost, Gradient Boost, and XGBoost step-by-step math',
      'Principal Component Analysis (PCA) clearly explained',
      'ROC and AUC curves, Precision, Recall, and F1 score'
    ],
    deepDive: 'Whenever a concept feels mathematically dense, watch the corresponding StatQuest video. Unrivaled clarity on Gradient Boosting and PCA.'
  },
  {
    id: 'res-cml-3',
    title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and PyTorch',
    creator: 'Aurélien Géron',
    category: 'repo',
    track: 'classical-ml',
    difficulty: 'Intermediate',
    duration: 'Comprehensive Repo + Notebooks',
    url: 'https://github.com/ageron/handson-ml3',
    isVerified: true,
    description: 'The companion GitHub repository for the top-rated ML textbook in the world. Contains fully documented, reproducible Jupyter notebooks for every major ML algorithm and workflow.',
    tags: ['Scikit-Learn', 'PyTorch', 'Jupyter', 'Open Source', 'Hands-On'],
    syllabus: [
      'The Machine Learning Project Checklist (End-to-End)',
      'Data preparation pipelines and Scikit-Learn ColumnTransformer',
      'Training and evaluating regression and classification models',
      'Support Vector Machines, Decision Trees, and Ensemble Learning',
      'Dimensionality reduction techniques and unsupervised clustering',
      'Introduction to Artificial Neural Networks and deep architectures'
    ],
    deepDive: 'The industry-standard practitioner manual. The repo includes end-to-end code for handling dirty data, building pipelines, tuning hyperparameters, and visualizing results.'
  },

  // --------------------------------------------------------------------------
  // DEEP LEARNING & NEURAL NETWORKS
  // --------------------------------------------------------------------------
  {
    id: 'res-dl-1',
    title: 'Neural Networks: Zero to Hero',
    creator: 'Andrej Karpathy (Former Director of AI at Tesla / OpenAI Founder)',
    category: 'video',
    track: 'deep-learning',
    difficulty: 'Intermediate',
    duration: '7 videos (~16 hrs)',
    url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
    isVerified: true,
    description: 'The most revered deep learning masterclass in computer science history. Karpathy builds micrograd (scalar autograd engine), makemore (bigram, MLP, BatchNorm, Wavenet), and GPT from scratch in raw Python and PyTorch.',
    tags: ['Karpathy', 'Autograd', 'micrograd', 'Backprop', 'PyTorch', 'Zero to Hero'],
    syllabus: [
      'The spelled-out intro to neural networks and backpropagation: building micrograd',
      'The spelled-out intro to language modeling: building makemore (Bigram model)',
      'Building makemore Part 2: Multilayer Perceptron (MLP) character-level language model',
      'Building makemore Part 3: Activations, Gradients, and BatchNorm diagnostics',
      'Building makemore Part 4: Becoming a Backprop Ninja (manual analytical gradients)',
      'Building makemore Part 5: WaveNet architecture and hierarchical convolutions',
      'Let\'s build GPT: from scratch, in code, spelled out (Generative Pretrained Transformer)'
    ],
    deepDive: 'Featured in every top AI roadmap. Writing backpropagation by hand in Python eliminates all "black-box" confusion about deep learning.'
  },
  {
    id: 'res-dl-2',
    title: 'MIT 6.S191: Introduction to Deep Learning',
    creator: 'Alexander Amini & Ava Soleimany (MIT)',
    category: 'course',
    track: 'deep-learning',
    difficulty: 'Beginner',
    duration: '10 lectures (~12 hrs)',
    url: 'https://youtube.com/playlist?list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r',
    isVerified: true,
    description: 'MIT\'s official introductory course on deep learning methods and applications. Fast-paced, visually stunning lectures covering perceptrons, CNNs, RNNs, Transformers, Generative Models, and Reinforcement Learning.',
    tags: ['MIT', 'Deep Learning', 'CNN', 'Generative Models', '6.S191'],
    syllabus: [
      'Deep Learning Basics: Perceptrons, Multi-Layer Perceptrons, Loss Functions, Gradient Descent',
      'Deep Sequence Modeling: Recurrent Neural Networks (RNNs) and LSTMs',
      'Deep Computer Vision: Convolutions, Kernels, Feature maps, Object Detection',
      'Generative Modeling: Autoencoders, VAEs, GANs, and Diffusion Models',
      'Reinforcement Learning: Markov Decision Processes, Q-learning, Policy Gradients',
      'Limitations and New Frontiers: Robustness, Bias, and Efficient Deep Learning'
    ],
    deepDive: 'Directly cited in the user’s 10 Free College Lectures doc. Alexander Amini delivers exceptional animations explaining backprop and convolution operations.'
  },
  {
    id: 'res-dl-3',
    title: 'Stanford CS231N: Deep Learning for Computer Vision',
    creator: 'Fei-Fei Li, Andrej Karpathy, Justin Johnson (Stanford)',
    category: 'course',
    track: 'deep-learning',
    difficulty: 'Intermediate',
    duration: '16 lectures (~20 hrs)',
    url: 'https://youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D',
    isVerified: true,
    description: 'The course that educated an entire generation of computer vision and deep learning engineers. Image classification, loss functions, optimization, ConvNets, and visual recognition.',
    tags: ['Stanford', 'CS231N', 'Computer Vision', 'CNN', 'Karpathy', 'ResNet'],
    syllabus: [
      'Image Classification pipeline, k-Nearest Neighbors, Linear classification',
      'Loss functions (SVM Multiclass hinge loss, Softmax cross-entropy) and Regularization',
      'Optimization: Stochastic Gradient Descent, Momentum, Adam, learning rate schedules',
      'Introduction to Neural Networks, Backpropagation, and Vectorized operations',
      'Convolutional Neural Networks: Spatial arrangement, filters, strides, padding, pooling',
      'CNN Architectures: AlexNet, VGG, GoogLeNet/Inception, ResNet skip connections',
      'Training Neural Networks Part 1 & 2: Activation functions, weight initialization, batch norm, dropout',
      'Visualizing and Understanding Convolutional Neural Networks (t-SNE, Guided Backprop)'
    ],
    deepDive: 'The assignments in CS231N require implementing backprop, convolution, and batch normalization from scratch in pure NumPy before moving to PyTorch.'
  },
  {
    id: 'res-dl-4',
    title: 'Deep Learning (The MIT Press Textbook)',
    creator: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
    category: 'book',
    track: 'deep-learning',
    difficulty: 'Advanced',
    duration: '800 pages (Free Online)',
    url: 'https://www.deeplearningbook.org/',
    isVerified: true,
    description: 'Known in the research community as "The Deep Learning Bible". Comprehensive theoretical treatment of applied math, deep networks, regularization, optimization, and research frontiers.',
    tags: ['Goodfellow', 'Bengio', 'Textbook', 'Deep Learning Bible', 'Free Book'],
    syllabus: [
      'Applied Math: Linear Algebra, Probability, Numerical Computation',
      'Deep Feedforward Networks, Hidden units, Architecture design',
      'Regularization for Deep Learning (Norm penalties, data augmentation, early stopping)',
      'Optimization for Training Deep Models (Ill-conditioning, local minima, adaptive algorithms)',
      'Convolutional Networks and Sequence Modeling (RNNs, bidirectional, deep recurrence)',
      'Autoencoders, Representation Learning, and Generative Modeling'
    ],
    deepDive: 'The definitive theoretical reference cited in almost every foundational AI research paper.'
  },
  {
    id: 'res-dl-5',
    title: 'Dive into Deep Learning (D2L.ai)',
    creator: 'Aston Zhang, Zack Lipton, Mu Li, Alex Smola',
    category: 'book',
    track: 'deep-learning',
    difficulty: 'Intermediate',
    duration: 'Interactive Book with Runnable Code',
    url: 'https://d2l.ai/',
    isVerified: true,
    description: 'An open-source, interactive book that teaches deep learning through math, figures, and runnable PyTorch/JAX code side-by-side.',
    tags: ['Interactive', 'PyTorch', 'JAX', 'D2L', 'Free Book'],
    syllabus: [
      'Linear Neural Networks for Regression and Classification',
      'Multilayer Perceptrons, Dropout, Forward/Backward propagation',
      'Builder\'s Guide: Custom layers, parameters, GPU execution',
      'Modern Convolutional Neural Networks (ResNet, ResNeXt, DenseNet)',
      'Recurrent Neural Networks and Modern RNNs (GRU, LSTM)',
      'Attention Mechanisms and Transformer Architectures',
      'Optimization Algorithms (Adagrad, RMSProp, Adam) with implementations'
    ],
    deepDive: 'Cited in the Reddit Applied Scientist roadmap as the best bridge between abstract mathematics and concrete PyTorch code.'
  },

  // --------------------------------------------------------------------------
  // TRANSFORMERS, MODERN NLP & LLMS
  // --------------------------------------------------------------------------
  {
    id: 'res-tf-1',
    title: 'Stanford CS224N: Natural Language Processing with Deep Learning',
    creator: 'Prof. Christopher Manning (Stanford)',
    category: 'course',
    track: 'nlp-transformers',
    difficulty: 'Intermediate',
    duration: 'Full Semester (~30 hrs)',
    url: 'https://youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV',
    isVerified: true,
    description: 'Stanford\'s world-leading NLP course. Word2Vec, GloVe, neural sequence models, Attention, Transformers, BERT, GPT, Pretraining, Prompting, and Instruction Tuning.',
    tags: ['Stanford', 'NLP', 'Transformers', 'Word2Vec', 'BERT', 'GPT'],
    syllabus: [
      'Introduction and Word Vectors: SVD and Word2Vec (Skip-Gram & CBOW)',
      'Word Window classification and neural networks',
      'Dependency Parsing and Language Models',
      'Recurrent Neural Networks (RNNs) and vanishing gradients',
      'Translation, Seq2Seq, and the Attention Mechanism',
      'The Transformer Architecture and Self-Attention from first principles',
      'Self-Supervised Pretraining: BERT (masked language modeling) and GPT',
      'Natural Language Generation, Prompting, RLHF, and Large Language Models'
    ],
    deepDive: 'Christopher Manning is one of the founding figures of modern computational linguistics. The assignments teach you how to write self-attention and fine-tune language models.'
  },
  {
    id: 'res-tf-2',
    title: 'Let\'s build GPT: from scratch, in code, spelled out',
    creator: 'Andrej Karpathy',
    category: 'video',
    track: 'nlp-transformers',
    difficulty: 'Intermediate',
    duration: '1 video (2 hrs)',
    url: 'https://youtu.be/MnbQjpejZt4',
    isVerified: true,
    description: 'Andrej Karpathy builds a Decoder-only Transformer language model from scratch in PyTorch following the "Attention Is All You Need" and OpenAI GPT-2 architectures.',
    tags: ['Karpathy', 'GPT from scratch', 'nanoGPT', 'Attention', 'PyTorch'],
    syllabus: [
      'Overview of Generative Pretrained Transformers and Tokenization',
      'Building the initial bigram language model baseline',
      'Mathematical trick in self-attention: using triangular matrices for causal masking',
      'Scaled Dot-Product Attention: Query, Key, Value calculations',
      'Multi-Head Attention: running independent attention heads in parallel',
      'Feed-Forward networks and residual connections (Skip connections)',
      'Layer Normalization (LayerNorm) vs Batch Normalization',
      'Training nanoGPT on Shakespeare and generating new text sample by sample'
    ],
    deepDive: 'Directly included in the user\'s Google Doc. Widely considered the best 2-hour tutorial ever recorded in machine learning.'
  },
  {
    id: 'res-tf-3',
    title: 'The Illustrated Transformer',
    creator: 'Jay Alammar',
    category: 'guide',
    track: 'nlp-transformers',
    difficulty: 'Beginner',
    duration: '45 min read',
    url: 'https://jalammar.github.io/illustrated-transformer/',
    isVerified: true,
    description: 'The most popular visual walkthrough of the Transformer model in existence. Uses step-by-step matrix animations to demystify Multi-Head Attention, Positional Encoding, and Residual Connections.',
    tags: ['Jay Alammar', 'Transformer', 'Visual Intuition', 'Attention'],
    syllabus: [
      'High-level overview: Encoder and Decoder stacks',
      'Looking inside the Encoder: Self-Attention and Feed-Forward layers',
      'Step-by-step self-attention calculation with matrix representations',
      'Multi-Headed Attention: expanding model representation capacity',
      'Positional Encodings: injecting word order into permutation-invariant attention',
      'The Residuals, LayerNorm, and Decoder components'
    ],
    deepDive: 'Recommended in the FAANG Applied Scientist roadmap as mandatory pre-reading before reading the original Attention paper.'
  },
  {
    id: 'res-tf-4',
    title: 'Stanford CS336: Language Modeling from Scratch',
    creator: 'Stanford University (CS336 Course Staff)',
    category: 'course',
    track: 'nlp-transformers',
    difficulty: 'Research',
    duration: '10 weeks (Lecture notes & labs)',
    url: 'https://cs336.stanford.edu/',
    isVerified: true,
    description: 'Build an LLM system end-to-end: tokenizers, transformer architecture, distributed training across multiple GPUs, data pipelines, scaling laws, evaluation, and alignment.',
    tags: ['Stanford', 'LLM from Scratch', 'Distributed Training', 'CS336', 'Research'],
    syllabus: [
      'Byte-Pair Encoding (BPE) tokenizers from first principles',
      'Efficient Transformer implementation (FlashAttention, RoPE, RMSNorm, SwiGLU)',
      'Large-scale pre-training systems: Data parallelism, Tensor parallelism, ZeRO',
      'Scaling laws (Chinchilla, Kaplan) and learning rate schedules',
      'Evaluation benchmarks: MMLU, GSM8K, HumanEval, and perplexity metrics',
      'Instruction tuning, LoRA, and preference optimization'
    ],
    deepDive: 'Emphasized by the FAANG Applied Scientist as the gold-standard course for anyone targeting LLM foundation model teams at OpenAI, Anthropic, Meta FAIR, or Google DeepMind.'
  },
  {
    id: 'res-tf-5',
    title: 'Umar Jamil: Paper Explainers & Deep Dives',
    creator: 'Umar Jamil',
    category: 'video',
    track: 'nlp-transformers',
    difficulty: 'Advanced',
    duration: '30+ deep dive videos',
    url: 'https://www.youtube.com/@umarjamilai',
    isVerified: true,
    description: 'Meticulous, line-by-line mathematical and code breakdowns of seminal AI papers: Attention Is All You Need, LLaMA, RoPE, FlashAttention, LoRA, and Stable Diffusion.',
    tags: ['Paper Walkthrough', 'Transformers', 'RoPE', 'FlashAttention', 'Math & Code'],
    syllabus: [
      'Attention Is All You Need: complete math & PyTorch implementation from scratch',
      'LLaMA 1 & 2 architecture: RoPE (Rotary Position Embeddings), RMSNorm, SwiGLU',
      'FlashAttention: GPU memory hierarchies, SRAM vs HBM, tiling, online softmax',
      'LoRA & QLoRA: Low-Rank Adaptation weight update decomposition',
      'Stable Diffusion & Latent Diffusion Models: Denoising U-Net and cross-attention'
    ],
    deepDive: 'High-leverage channel praised in the Reddit guide for bridging the gap between conference papers and production code.'
  },

  // --------------------------------------------------------------------------
  // GENERATIVE AI, RAG & LLM SYSTEMS
  // --------------------------------------------------------------------------
  {
    id: 'res-gen-1',
    title: 'Hugging Face LLM Course',
    creator: 'Hugging Face Community',
    category: 'course',
    track: 'genai-llm',
    difficulty: 'Intermediate',
    duration: 'Self-paced (~20 hrs)',
    url: 'https://huggingface.co/learn/llm-course/en/chapter1/1',
    isVerified: true,
    description: 'A hands-on, modern curriculum on Large Language Models covering Hugging Face Transformers, PEFT, TRL (Transformer Reinforcement Learning), dataset curation, and quantization.',
    tags: ['Hugging Face', 'Fine-Tuning', 'PEFT', 'LoRA', 'Open Source'],
    syllabus: [
      'LLM architecture anatomy: Encoders, Decoders, and Seq2Seq',
      'Using the Transformers pipeline and AutoClasses',
      'Fine-tuning a pretrained model with SFTTrainer',
      'Parameter-Efficient Fine-Tuning (PEFT): LoRA and Prefix Tuning',
      'Alignment: Direct Preference Optimization (DPO) and PPO with TRL',
      'Model evaluation, benchmarks, and publishing to Hugging Face Hub'
    ],
    deepDive: 'Practical industry standard for engineers building custom LLM applications.'
  },
  {
    id: 'res-gen-2',
    title: 'MIT 6.5940: TinyML and Efficient Deep Learning Computing',
    creator: 'Prof. Song Han (MIT Han Lab)',
    category: 'course',
    track: 'genai-llm',
    difficulty: 'Advanced',
    duration: '24 lectures (~30 hrs)',
    url: 'https://hanlab.mit.edu/courses/2023-fall-65940',
    isVerified: true,
    description: 'Master model compression and high-throughput inference: pruning, post-training quantization, quantization-aware training, knowledge distillation, and edge deployment.',
    tags: ['MIT', 'Quantization', 'Model Compression', 'EfficientML', 'vLLM', 'Song Han'],
    syllabus: [
      'Model compression: Fine-grained pruning, structured channel pruning',
      'Quantization basics: Uniform, symmetric, asymmetric, INT8/INT4 quantization',
      'Post-Training Quantization (PTQ) vs Quantization-Aware Training (QAT)',
      'Weight-only quantization: GPTQ, AWQ (Activation-aware Weight Quantization), SmoothQuant',
      'Neural Architecture Search (NAS) and hardware-aware automated design',
      'Efficient LLM serving: KV cache compression, PagedAttention, vLLM acceleration'
    ],
    deepDive: 'Praised by FAANG engineers. Running 70B parameter LLMs at low latency requires the exact techniques taught in this course.'
  },
  {
    id: 'res-gen-3',
    title: 'Production RAG: Architecture, Chunking & Evaluation',
    creator: 'LlamaIndex & Pinecone Engineering',
    category: 'guide',
    track: 'genai-llm',
    difficulty: 'Intermediate',
    duration: '5 hr read + code',
    url: 'https://www.pinecone.io/learn/series/rag/',
    isVerified: true,
    description: 'Comprehensive guide to building production-grade Retrieval-Augmented Generation systems. Explores semantic chunking, embedding fine-tuning, hybrid search, and RAG triad evaluation.',
    tags: ['RAG', 'Vector DB', 'Pinecone', 'Embeddings', 'Hybrid Search'],
    syllabus: [
      'Why naive RAG fails: semantic mismatch, context loss, and hallucination',
      'Advanced chunking: sentence window retrieval, recursive character, document hierarchies',
      'Dense embeddings vs sparse lexical search (BM25) and hybrid retrieval',
      'Cross-encoder re-ranking with Cohere and BGE-Reranker',
      'RAG Triad metrics: Context Relevance, Groundedness, Answer Relevance with Ragas'
    ],
    deepDive: 'The definitive handbook for overcoming hallucination and stale data in production LLM pipelines.'
  },

  // --------------------------------------------------------------------------
  // AGENTIC AI & AGENTOPS
  // --------------------------------------------------------------------------
  {
    id: 'res-agent-1',
    title: 'LangGraph & Multi-Agent Systems Masterclass',
    creator: 'Harrison Chase & LangChain Team',
    category: 'course',
    track: 'agentic-ai',
    difficulty: 'Intermediate',
    duration: '4 hrs interactive course',
    url: 'https://academy.langchain.com/courses/intro-to-langgraph',
    isVerified: true,
    description: 'Build stateful, multi-actor LLM applications with LangGraph. Teaches cyclical workflows, human-in-the-loop validation, persistence, and multi-agent collaboration patterns.',
    tags: ['LangGraph', 'Agents', 'Multi-Agent', 'ReAct', 'Workflows'],
    syllabus: [
      'Why DAGs are insufficient for autonomous agents: the necessity of cyclic graphs',
      'Defining nodes, state schemas, and conditional routing edges',
      'Implementing the ReAct pattern: Reason, Act, Observe',
      'Human-in-the-loop: breakpoint interruptions and state editing',
      'Multi-agent architectures: Supervisor agent, hierarchical teams, network collaboration',
      'Time travel debugging and checkpoint persistence'
    ],
    deepDive: 'LangGraph represents the transition from simple prompt chaining to resilient, cyclical production agents.'
  },
  {
    id: 'res-agent-2',
    title: 'Model Context Protocol (MCP) Specification & Architecture',
    creator: 'Anthropic Engineering',
    category: 'guide',
    track: 'agentic-ai',
    difficulty: 'Intermediate',
    duration: 'Documentation & SDKs',
    url: 'https://modelcontextprotocol.io/',
    isVerified: true,
    description: 'The open standard enabling AI assistants to securely access tools, databases, and APIs. Learn how to build custom MCP servers and clients to connect LLMs to data.',
    tags: ['MCP', 'Anthropic', 'Tools', 'Protocol', 'Autonomous Agents'],
    syllabus: [
      'The MCP architecture: Clients, Hosts, and Servers',
      'Core protocol primitives: Resources, Prompts, and Tools',
      'Transport protocols: stdio vs Server-Sent Events (SSE)',
      'Security boundaries, permissions, and zero-trust execution',
      'Building an MCP server in Python and TypeScript'
    ],
    deepDive: 'The emerging universal standard for AI tool orchestration across Claude, Cursor, and modern agent systems.'
  },

  // --------------------------------------------------------------------------
  // MLOPS, SERVING & AI SECOPS
  // --------------------------------------------------------------------------
  {
    id: 'res-ops-1',
    title: 'Designing Machine Learning Systems',
    creator: 'Chip Huyen (Stanford Lecturer / Former Snorkel AI)',
    category: 'book',
    track: 'mlops',
    difficulty: 'Intermediate',
    duration: '350 pages (O\'Reilly)',
    url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',
    isVerified: true,
    description: 'The premier modern guide to architecting production ML systems. Covers data engineering, feature stores, model training, monitoring for data drift, and online testing.',
    tags: ['MLOps', 'Chip Huyen', 'System Design', 'Feature Stores', 'Data Drift'],
    syllabus: [
      'Overview of Machine Learning Systems in Production',
      'Data Engineering Fundamentals: ETL, stream processing, data schemas',
      'Training Data: sampling, labeling, class imbalance, and data augmentation',
      'Feature Engineering: scaling, encoding, feature stores (Feast vs Tecton)',
      'Model Development and Offline Evaluation',
      'Model Deployment and Serving (batch vs streaming, latency requirements)',
      'Monitoring and Continual Learning: data drift, concept drift, shadow deployment'
    ],
    deepDive: 'The core syllabus used across FAANG ML System Design interview preparation.'
  },
  {
    id: 'res-ops-2',
    title: 'End-to-End MLOps Pipeline with MLflow & DVC',
    creator: 'CampusX (Nitish Singh)',
    category: 'video',
    track: 'mlops',
    difficulty: 'Intermediate',
    duration: 'Full Course Playlist (~25 hrs)',
    url: 'https://www.youtube.com/playlist?list=PLKnIA16_Rmvb32S3Qv0bZXUurgXvf1ZZ-',
    isVerified: true,
    description: 'Comprehensive, step-by-step practical MLOps course covering DVC data versioning, MLflow experiment tracking, Docker containerization, AWS/GCP deployment, and CI/CD pipelines.',
    tags: ['CampusX', 'MLOps', 'MLflow', 'DVC', 'Docker', 'CI/CD'],
    syllabus: [
      'Introduction to MLOps and production lifecycles',
      'Data version control with DVC and remote cloud storage (AWS S3)',
      'Experiment tracking, metric logging, and Model Registry with MLflow',
      'Building automated pipeline stages with DVC Repro',
      'Containerizing ML microservices with Docker and FastAPI',
      'Automating tests and deployment with GitHub Actions CI/CD'
    ],
    deepDive: 'Praised by college graduates and professionals for providing complete, hands-on production code from scratch.'
  },
  {
    id: 'res-ops-3',
    title: 'OWASP Top 10 for Large Language Model Applications',
    creator: 'OWASP Foundation',
    category: 'guide',
    track: 'mlops',
    difficulty: 'Intermediate',
    duration: 'Standard Report',
    url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
    isVerified: true,
    description: 'The cybersecurity standard for securing GenAI and ML systems. Details prompt injection vulnerabilities, insecure output handling, training data poisoning, and model denial of service.',
    tags: ['AI Security', 'OWASP', 'Prompt Injection', 'SecOps', 'Red Teaming'],
    syllabus: [
      'LLM01: Prompt Injection (Direct vs Indirect injections and jailbreaks)',
      'LLM02: Insecure Output Handling (XSS, SSRF, remote code execution)',
      'LLM03: Training Data Poisoning and backdoor triggers',
      'LLM04: Model Denial of Service (resource exhaustion, context stuffing)',
      'LLM05: Supply Chain Vulnerabilities (compromised base models and packages)',
      'LLM06: Sensitive Information Disclosure and PII leakage'
    ],
    deepDive: 'Essential for AI SecOps engineers and any team deploying public-facing LLM agents.'
  },

  // --------------------------------------------------------------------------
  // FAANG INTERVIEW PREP, SYSTEM DESIGN & RESEARCH STRATEGY
  // --------------------------------------------------------------------------
  {
    id: 'res-faang-1',
    title: 'Becoming an MLE at FAANG: Guide by Meta/Google Technical Leader',
    creator: 'Shivam Anand (interviewing.io)',
    category: 'guide',
    track: 'faang-interview',
    difficulty: 'Advanced',
    duration: 'Comprehensive Article',
    url: 'https://interviewing.io/blog/becoming-an-mle-at-faang-what-you-need-to-know',
    isVerified: true,
    description: 'An insider look into MLE and Applied Scientist hiring at Meta and Google. Explains the infra vs ML spectrum, Generalist vs Specialist tracks, and how to conquer ML System Design.',
    tags: ['FAANG', 'Meta', 'Google', 'Interview Guide', 'ML System Design'],
    syllabus: [
      'The ML Team Spectrum: Infra-focus vs Model-focus; Research vs Applied',
      'ML Specialists (depth-first) vs ML Generalists (breadth-first)',
      'Anatomy of FAANG ML interview loops: coding, ML theory, system design, leadership',
      'The 7-step ML System Design conversation: discovering the edge of your knowledge',
      'Lateral move strategy: Transitioning from standard Software Engineering to MLE'
    ],
    deepDive: 'Directly provided in your prompt. This guide dismantles the common myths about getting hired into top-tier AI engineering teams.'
  },
  {
    id: 'res-faang-2',
    title: 'FAANG Applied Scientist Roadmap & Publishing Strategy',
    creator: 'Anonymous FAANG Applied Scientist (Reddit r/Btechtards)',
    category: 'guide',
    track: 'faang-interview',
    difficulty: 'Research',
    duration: 'In-depth Reddit Manifesto',
    url: 'https://www.reddit.com/r/Btechtards/comments/1o3xftk/my_roadmap_for_mlai_as_an_applied_scientist_in/',
    isVerified: true,
    description: 'The top-voted roadmap for landing an Applied Scientist role off-campus. Explains the Top-Down Knowledge Graph study technique, math whiteboard expectations, and CS conference publishing dynamics.',
    tags: ['Applied Scientist', 'FAANG', 'NeurIPS', 'CORE A*', 'Top-Down Learning'],
    syllabus: [
      'The three specializations: AI Engineering vs ML Engineering vs Applied Science',
      'Top-down study algorithm: building personal knowledge trees to first principles',
      'Whiteboard Math interviews: deriving attention, loss functions, and diffusion',
      'Conference vs Journal in CS: Why NeurIPS, ICML, ICLR, CVPR are the primary currency',
      'CORE Rankings (A*), h5-index, OpenReview etiquette, and reproducible baselines',
      'Strategy for undergraduate and graduate students to publish and get noticed'
    ],
    deepDive: 'The core inspiration for TensorArcade\'s curriculum hierarchy.'
  },
  {
    id: 'res-faang-3',
    title: 'Top 10 Landmark AI Research Papers (Reading List)',
    creator: 'Curated by TensorArcade Staff',
    category: 'paper',
    track: 'faang-interview',
    difficulty: 'Research',
    duration: '10 seminal papers',
    url: 'https://github.com/aadi1011/AI-ML-Roadmap-from-scratch',
    isVerified: true,
    description: 'The 10 landmark papers every aspiring Applied Scientist and MLE must read, annotate, and understand mathematically.',
    tags: ['Research Papers', 'NeurIPS', 'ICLR', 'Transformers', 'ResNet', 'LoRA'],
    syllabus: [
      'Attention Is All You Need (Vaswani et al., NeurIPS 2017) - Transformer genesis',
      'Deep Residual Learning for Image Recognition (He et al., CVPR 2016) - ResNet skip connections',
      'Adam: A Method for Stochastic Optimization (Kingma & Ba, ICLR 2015) - Default DL optimizer',
      'Generative Adversarial Nets (Goodfellow et al., NeurIPS 2014) - GAN foundations',
      'LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., ICLR 2022) - PEFT foundation',
      'FlashAttention: Fast and Memory-Efficient Exact Attention (Dao et al., NeurIPS 2022) - IO awareness',
      'Language Models are Few-Shot Learners (Brown et al., NeurIPS 2020) - GPT-3 emergence',
      'Direct Preference Optimization: Your Language Model is Secretly a Reward Model (Rafailov et al., NeurIPS 2023)',
      'Segment Anything (Kirillov et al., ICCV 2023) - Foundation vision segmentation',
      'DeepSeek-R1 / ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., ICLR 2023)'
    ],
    deepDive: 'Read these papers in chronological order and recreate their core mechanisms to master ML theory.'
  }
];
