/* ==========================================================================
   TENSORARCADE: 11-STAGE ML ROADMAP DATASET
   ========================================================================== */

const ROADMAP_STAGES = [
  {
    id: 'stage-00',
    number: '00',
    title: 'Environment & Foundations',
    tagline: 'Python 3.12+, VS Code, Modern Package Management & Linux Terminal',
    description: 'Before training neural networks, establish a bulletproof developer environment. Learn modern Python tooling, package management with uv/conda, Git version control, and Linux CLI skills essential for remote GPU training clusters.',
    xp: 200,
    modules: [
      {
        name: 'Developer Environment & CLI',
        milestones: [
          { id: 'm0-1', text: 'Set up VS Code with Python, Pylance, Jupyter, and Remote-SSH extensions' },
          { id: 'm0-2', text: 'Master Linux terminal navigation, bash scripting, and environment variables' },
          { id: 'm0-3', text: 'Install Python 3.12+ and manage fast virtual environments using UV or Conda' }
        ]
      },
      {
        name: 'Version Control & Code Quality',
        milestones: [
          { id: 'm0-4', text: 'Git workflows: branch, merge, rebase, and GitHub pull request reviews' },
          { id: 'm0-5', text: 'Python type hints (PEP 484), Ruff linter/formatter, and pytest unit testing' }
        ]
      }
    ],
    linkedResourceIds: ['res-py-1', 'res-py-2', 'res-py-3']
  },
  {
    id: 'stage-01',
    number: '01',
    title: 'The Mathematics Engine',
    tagline: 'Linear Algebra, Matrix Calculus, Probability, Statistics & Convex Optimization',
    description: 'The foundation of all modern AI. As noted by FAANG Applied Scientists, technical interviews drill down into the exact mathematical formulation of algorithms. Master vector spaces, SVD, Jacobians, Bayes rule, and gradient descent from first principles.',
    xp: 500,
    modules: [
      {
        name: 'Linear Algebra & Matrix Decompositions',
        milestones: [
          { id: 'm1-1', text: 'Vectors, vector spaces, dot products, cross products, and matrix transformations' },
          { id: 'm1-2', text: 'Matrix factorization: Eigenvalues, Eigenvectors, and Singular Value Decomposition (SVD)' },
          { id: 'm1-3', text: 'Positive semi-definite matrices, rank, determinant, and projection matrices' }
        ]
      },
      {
        name: 'Multivariable & Matrix Calculus',
        milestones: [
          { id: 'm1-4', text: 'Partial derivatives, gradients, directional derivatives, and chain rule' },
          { id: 'm1-5', text: 'Jacobian and Hessian matrices; Taylor series approximations in vector spaces' },
          { id: 'm1-6', text: 'Matrix calculus (deriving gradients with respect to weight matrices in backprop)' }
        ]
      },
      {
        name: 'Probability & Inferential Statistics',
        milestones: [
          { id: 'm1-7', text: 'Probability distributions (Gaussian, Bernoulli, Poisson, Dirichlet)' },
          { id: 'm1-8', text: 'Conditional probability, Bayes Rule, Maximum Likelihood Estimation (MLE), and MAP' },
          { id: 'm1-9', text: 'Expectation, Variance, Covariance matrices, Central Limit Theorem, and Hypothesis Testing' }
        ]
      },
      {
        name: 'Convex Optimization',
        milestones: [
          { id: 'm1-10', text: 'Convex sets, convex functions, local vs global minima' },
          { id: 'm1-11', text: 'Gradient Descent variants: Stochastic (SGD), Momentum, RMSProp, Adam' },
          { id: 'm1-12', text: 'Lagrange multipliers, KKT conditions, and constrained optimization' }
        ]
      }
    ],
    linkedResourceIds: ['res-math-1', 'res-math-2', 'res-math-3', 'res-math-4', 'res-math-5', 'res-math-6']
  },
  {
    id: 'stage-02',
    number: '02',
    title: 'Scientific Python & Data Science',
    tagline: 'NumPy Vectorization, Pandas Data Wrangling, Visualization & SQL',
    description: 'Data is the lifeblood of Machine Learning. Learn high-performance vectorized array computation with NumPy, advanced dataframe manipulation with Pandas, exploratory data analysis, and relational data querying with SQL.',
    xp: 350,
    modules: [
      {
        name: 'Vectorized Computing with NumPy',
        milestones: [
          { id: 'm2-1', text: 'Multi-dimensional arrays, indexing, slicing, and broadcasting rules' },
          { id: 'm2-2', text: 'Vectorized math operations, matrix multiplication, and linear algebra routines' },
          { id: 'm2-3', text: 'Performance benchmarking: vectorized loops vs pure Python iterations' }
        ]
      },
      {
        name: 'Data Wrangling with Pandas & Polars',
        milestones: [
          { id: 'm2-4', text: 'Series and DataFrames: filtering, grouping, aggregation, merging, and pivots' },
          { id: 'm2-5', text: 'Handling missing data, duplicate values, outlier detection, and datetime parsing' },
          { id: 'm2-6', text: 'Introduction to Polars for fast multi-threaded dataframe processing' }
        ]
      },
      {
        name: 'Exploratory Data Analysis & SQL',
        milestones: [
          { id: 'm2-7', text: 'Visualizations with Matplotlib, Seaborn, and interactive Plotly charts' },
          { id: 'm2-8', text: 'SQL for ML: Window functions, CTEs, self-joins, and aggregating billion-row datasets' }
        ]
      }
    ],
    linkedResourceIds: ['res-ds-1', 'res-ds-2', 'res-ds-3']
  },
  {
    id: 'stage-03',
    number: '03',
    title: 'Classical Machine Learning',
    tagline: 'Supervised, Unsupervised, Feature Engineering & Gradient Boosting',
    description: 'Master the battle-tested algorithms that power 80% of real-world industry applications: Linear & Logistic Regression, Decision Trees, Random Forests, XGBoost/LightGBM, SVMs, Clustering, and rigorous cross-validation.',
    xp: 450,
    modules: [
      {
        name: 'Supervised Learning Algorithms',
        milestones: [
          { id: 'm3-1', text: 'Linear Regression: Ordinary Least Squares (OLS), Ridge (L2), and Lasso (L1)' },
          { id: 'm3-2', text: 'Logistic Regression: Sigmoid, Log-Loss/Cross-Entropy, Decision Boundaries' },
          { id: 'm3-3', text: 'Decision Trees: Gini Impurity, Information Gain, and Entropy' },
          { id: 'm3-4', text: 'Support Vector Machines (SVMs): Margins, Hyperplanes, and Kernel Trick' },
          { id: 'm3-5', text: 'k-Nearest Neighbors (k-NN) and Naive Bayes Classifiers' }
        ]
      },
      {
        name: 'Ensemble Learning & Gradient Boosting',
        milestones: [
          { id: 'm3-6', text: 'Bagging vs Boosting concepts; Bootstrap aggregation and Random Forests' },
          { id: 'm3-7', text: 'Gradient Boosted Decision Trees (GBDT) formulation from first principles' },
          { id: 'm3-8', text: 'Mastering XGBoost, LightGBM, and CatBoost in production settings' }
        ]
      },
      {
        name: 'Unsupervised Learning & Evaluation',
        milestones: [
          { id: 'm3-9', text: 'K-Means Clustering, Hierarchical Clustering, and DBSCAN' },
          { id: 'm3-10', text: 'Dimensionality reduction: Principal Component Analysis (PCA) and t-SNE' },
          { id: 'm3-11', text: 'Validation: k-Fold Cross-Validation, Precision, Recall, F1, ROC-AUC, PR-AUC' }
        ]
      }
    ],
    linkedResourceIds: ['res-cml-1', 'res-cml-2', 'res-cml-3', 'res-cml-4']
  },
  {
    id: 'stage-04',
    number: '04',
    title: 'Deep Learning & Neural Networks',
    tagline: 'Perceptrons to Backpropagation, CNNs, RNNs & PyTorch Mastery',
    description: 'Dive deep into connectionist representation learning. Understand computational graphs, automatic differentiation, multilayer perceptrons, convolution operations, sequence modeling, and training tricks like batch normalization and dropout.',
    xp: 500,
    modules: [
      {
        name: 'Neural Network Foundations',
        milestones: [
          { id: 'm4-1', text: 'Single Layer Perceptron, Activation functions (ReLU, GELU, Sigmoid, Softmax)' },
          { id: 'm4-2', text: 'Code backpropagation from scratch with scalar autograd (like Andrej Karpathy micrograd)' },
          { id: 'm4-3', text: 'Vanishing & Exploding gradients, Weight initializations (He, Xavier/Glorot)' }
        ]
      },
      {
        name: 'PyTorch Deep Dive',
        milestones: [
          { id: 'm4-4', text: 'Tensors, CUDA GPU acceleration, autograd computation graphs, and nn.Module' },
          { id: 'm4-5', text: 'Custom Datasets, DataLoaders, custom Loss Functions, and training loops' },
          { id: 'm4-6', text: 'Regularization: Dropout, Batch Normalization, Layer Normalization, Weight Decay' }
        ]
      },
      {
        name: 'Convolutional & Recurrent Architectures',
        milestones: [
          { id: 'm4-7', text: 'CNN building blocks: Kernels, Stride, Padding, Pooling, Receptive Field' },
          { id: 'm4-8', text: 'Classic Vision Architectures: AlexNet, VGG, ResNet (Residual Skip Connections)' },
          { id: 'm4-9', text: 'Sequential modeling: RNNs, vanishing gradients across time, LSTM and GRU gates' }
        ]
      }
    ],
    linkedResourceIds: ['res-dl-1', 'res-dl-2', 'res-dl-3', 'res-dl-4', 'res-dl-5']
  },
  {
    id: 'stage-05',
    number: '05',
    title: 'Transformers & Modern NLP',
    tagline: 'Self-Attention, BERT, GPT Architecture from Scratch & Hugging Face',
    description: 'The architectural breakthrough that ignited modern AI. Dissect the landmark "Attention Is All You Need" paper, build GPT from scratch with Andrej Karpathy, understand tokenization, and master the Hugging Face ecosystem.',
    xp: 550,
    modules: [
      {
        name: 'Attention Mechanism & The Transformer',
        milestones: [
          { id: 'm5-1', text: 'Why RNNs failed at long contexts; Intuition behind Queries, Keys, and Values' },
          { id: 'm5-2', text: 'Scaled Dot-Product Attention: Mathematical formulation and vector dimensions' },
          { id: 'm5-3', text: 'Multi-Head Attention, Positional Encodings (Sinusoidal, Learned, RoPE/Rotary)' },
          { id: 'm5-4', text: 'Full Encoder-Decoder architecture vs Decoder-only vs Encoder-only' }
        ]
      },
      {
        name: 'Building & Training autoregressive LLMs',
        milestones: [
          { id: 'm5-5', text: 'Byte-Pair Encoding (BPE) tokenizers: tiktoken, SentencePiece, WordPiece' },
          { id: 'm5-6', text: 'Code a complete GPT model from scratch in PyTorch (nanoGPT style)' },
          { id: 'm5-7', text: 'Causal masking, KV-Cache mechanics for fast inference, and sampling temperatures' }
        ]
      },
      {
        name: 'Hugging Face Ecosystem',
        milestones: [
          { id: 'm5-8', text: 'Transformers library: AutoModel, AutoTokenizer, pipeline API' },
          { id: 'm5-9', text: 'Datasets and Accelerate libraries for distributed GPU fine-tuning' }
        ]
      }
    ],
    linkedResourceIds: ['res-tf-1', 'res-tf-2', 'res-tf-3', 'res-tf-4', 'res-tf-5']
  },
  {
    id: 'stage-06',
    number: '06',
    title: 'Computer Vision & Multimodal AI',
    tagline: 'Vision Transformers (ViT), Diffusion Models, CLIP & Segment Anything',
    description: 'Expand beyond text into spatial vision and multi-modal intelligence. Learn how Vision Transformers tokenize images, how CLIP connects vision and language, and how Latent Diffusion models generate hyper-realistic imagery.',
    xp: 450,
    modules: [
      {
        name: 'Modern Vision Architectures',
        milestones: [
          { id: 'm6-1', text: 'Vision Transformers (ViT): Image patching, linear projection, and class tokens' },
          { id: 'm6-2', text: 'Object Detection & Segmentation: YOLOv8, Faster R-CNN, and Segment Anything (SAM)' }
        ]
      },
      {
        name: 'Multimodal Models & Contrastive Learning',
        milestones: [
          { id: 'm6-3', text: 'CLIP (Contrastive Language-Image Pre-training): Dual encoders and InfoNCE loss' },
          { id: 'm6-4', text: 'Vision-Language Models (VLMs): LLaVA, Gemini Vision architecture, and patch embeddings' }
        ]
      },
      {
        name: 'Generative Diffusion Models',
        milestones: [
          { id: 'm6-5', text: 'DDPM: Forward Gaussian noise process and reverse denoising U-Net' },
          { id: 'm6-6', text: 'Latent Diffusion Models (Stable Diffusion): Autoencoders and text conditioning' }
        ]
      }
    ],
    linkedResourceIds: ['res-cv-1', 'res-cv-2', 'res-cv-3']
  },
  {
    id: 'stage-07',
    number: '07',
    title: 'Generative AI & LLM Systems',
    tagline: 'Fine-Tuning (LoRA/QLoRA), RAG Pipelines, Vector DBs & Quantization',
    description: 'Transform base language models into production-ready intelligence. Master Parameter-Efficient Fine-Tuning (PEFT/LoRA), production Retrieval-Augmented Generation (RAG) with vector databases, and extreme inference quantization (AWQ, GGUF, vLLM).',
    xp: 550,
    modules: [
      {
        name: 'PEFT & Instruction Fine-Tuning',
        milestones: [
          { id: 'm7-1', text: 'Supervised Fine-Tuning (SFT) data formatting: Alpaca, ShareGPT, ChatML' },
          { id: 'm7-2', text: 'LoRA (Low-Rank Adaptation) & QLoRA: Math derivation and adapter merging' },
          { id: 'm7-3', text: 'Alignment: RLHF, Direct Preference Optimization (DPO), and rejection sampling' }
        ]
      },
      {
        name: 'Production Retrieval-Augmented Generation (RAG)',
        milestones: [
          { id: 'm7-4', text: 'Chunking strategies (semantic, recursive, hierarchical) and embedding models' },
          { id: 'm7-5', text: 'Vector Databases: HNSW indexing, Cosine similarity, Pinecone, Chroma, Milvus' },
          { id: 'm7-6', text: 'Hybrid Search (BM25 + Vector) and Cross-Encoder Re-Ranking (Cohere, BGE)' },
          { id: 'm7-7', text: 'RAG Evaluation: Ragas / TruLens (Faithfulness, Answer Relevance, Context Recall)' }
        ]
      },
      {
        name: 'Quantization & Ultra-Fast Inference',
        milestones: [
          { id: 'm7-8', text: 'Quantization math: FP16, INT8, INT4, GPTQ, AWQ, and GGUF' },
          { id: 'm7-9', text: 'High-throughput LLM serving: vLLM, PagedAttention, continuous batching' }
        ]
      }
    ],
    linkedResourceIds: ['res-gen-1', 'res-gen-2', 'res-gen-3', 'res-gen-4', 'res-gen-5']
  },
  {
    id: 'stage-08',
    number: '08',
    title: 'Agentic AI & AgentOps',
    tagline: 'Autonomous ReAct Agents, Tool Calling, LangGraph, Multi-Agent & MCP',
    description: 'Moving from static prompt-response LLMs to autonomous problem solvers. Learn the ReAct loop, deterministic function calling, stateful multi-agent graphs with LangGraph/CrewAI, Anthropic Model Context Protocol (MCP), and agent evaluation.',
    xp: 500,
    modules: [
      {
        name: 'Core Agent Architecture',
        milestones: [
          { id: 'm8-1', text: 'The ReAct Framework: Reason -> Action -> Observation cycle' },
          { id: 'm8-2', text: 'Structured JSON output and OpenAI/Anthropic Tool Calling mechanics' },
          { id: 'm8-3', text: 'Short-term memory vs Long-term episodic memory (Vector memory)' }
        ]
      },
      {
        name: 'Multi-Agent Orchestration & Protocols',
        milestones: [
          { id: 'm8-4', text: 'Stateful workflow graphs with LangGraph: nodes, conditional edges, human-in-the-loop' },
          { id: 'm8-5', text: 'Role-playing multi-agent frameworks: CrewAI and Microsoft AutoGen' },
          { id: 'm8-6', text: 'Model Context Protocol (MCP): standardized server-client tools and resources' }
        ]
      },
      {
        name: 'AgentOps, Guardrails & Evaluation',
        milestones: [
          { id: 'm8-7', text: 'Tracing and telemetry with LangSmith, Arize Phoenix, and Langfuse' },
          { id: 'm8-8', text: 'Deterministic guardrails (NeMo Guardrails, Guardrails AI, PII masking)' },
          { id: 'm8-9', text: 'Agent benchmark evaluation: SWE-bench, GAIA, and task completion metrics' }
        ]
      }
    ],
    linkedResourceIds: ['res-agent-1', 'res-agent-2', 'res-agent-3', 'res-agent-4']
  },
  {
    id: 'stage-09',
    number: '09',
    title: 'Production MLOps & AI SecOps',
    tagline: 'Docker, Kubernetes, MLflow, Model Serving, Monitoring & AI Security',
    description: 'Bridging the chasm between experimental notebooks and enterprise-grade reliability. Master containerization, experiment tracking, automated retraining pipelines, Triton inference server, drift detection, and security red teaming against prompt injection.',
    xp: 500,
    modules: [
      {
        name: 'Containerization & Infrastructure',
        milestones: [
          { id: 'm9-1', text: 'Docker for ML: multi-stage builds, NVIDIA Container Toolkit, CUDA base images' },
          { id: 'm9-2', text: 'Kubernetes orchestration: Deployments, Services, GPU resource scheduling' }
        ]
      },
      {
        name: 'Pipelines & Experiment Tracking',
        milestones: [
          { id: 'm9-3', text: 'Experiment tracking and model registry with MLflow and Weights & Biases' },
          { id: 'm9-4', text: 'Data and model version control using DVC (Data Version Control)' },
          { id: 'm9-5', text: 'CI/CD automation for ML (GitHub Actions, Kubeflow / Airflow DAGs)' }
        ]
      },
      {
        name: 'Serving, Monitoring & AI SecOps',
        milestones: [
          { id: 'm9-6', text: 'High-performance serving: Triton Inference Server, ONNX Runtime, TensorRT' },
          { id: 'm9-7', text: 'Monitoring: Data drift (KS test, PSI), concept drift, Evidently AI dashboards' },
          { id: 'm9-8', text: 'AI Security (SecOps): Direct/Indirect prompt injection, jailbreaks, model theft defense' }
        ]
      }
    ],
    linkedResourceIds: ['res-ops-1', 'res-ops-2', 'res-ops-3', 'res-ops-4']
  },
  {
    id: 'stage-10',
    number: '10',
    title: 'FAANG Applied Scientist & MLE Playbook',
    tagline: 'Interview Loops, 7-Step ML System Design, Top Conference Strategy & Mock Drills',
    description: 'Directly synthesized from senior leaders at Meta/Google and FAANG Applied Scientists. Master the 4 interview archetypes, the 7-step ML system design blueprint, top CS conference publishing dynamics (NeurIPS/ICML/ICLR/CVPR), and landmark papers.',
    xp: 600,
    modules: [
      {
        name: 'Roles & Interview Archetypes',
        milestones: [
          { id: 'm10-1', text: 'Understand differences: Applied Scientist vs ML Engineer vs AI Engineer vs Data Scientist' },
          { id: 'm10-2', text: 'Master the Top-Down Knowledge Graph approach to study concepts to first principles' },
          { id: 'm10-3', text: 'Prepare for Math whiteboard drills: deriving gradient descent, attention, and loss formulas' }
        ]
      },
      {
        name: '7-Step ML System Design Blueprint',
        milestones: [
          { id: 'm10-4', text: 'Step 1 & 2: Clarify problem, scope constraints, and define Business vs ML metrics' },
          { id: 'm10-5', text: 'Step 3 & 4: Data collection, feature pipelines, feature stores (Feast), and negative sampling' },
          { id: 'm10-6', text: 'Step 5: Model architecture selection, inductive bias, and two-stage retrieval + ranking' },
          { id: 'm10-7', text: 'Step 6 & 7: Offline/online evaluation (A/B tests), serving latency, drift, and retraining' }
        ]
      },
      {
        name: 'Research Publication & Landmark Papers',
        milestones: [
          { id: 'm10-8', text: 'CS Conferences vs Journals: Why NeurIPS/ICML/ICLR/CVPR are the primary currency' },
          { id: 'm10-9', text: 'CORE Rankings (A*), h5-index, OpenReview etiquette, and reproducible baselines' },
          { id: 'm10-10', text: 'Read & implement 10 landmark papers (Attention is All You Need, ResNet, Adam, LoRA, etc.)' }
        ]
      }
    ],
    linkedResourceIds: ['res-faang-1', 'res-faang-2', 'res-faang-3', 'res-faang-4']
  }
];
