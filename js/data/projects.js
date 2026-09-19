/* ==========================================================================
   TENSORARCADE: PROJECT QUEST VAULT
   Tiered ML/AI Portfolio Projects: Beginner, Intermediate, Advanced, God Level
   ========================================================================== */

const PROJECTS_DATA = [
  // --------------------------------------------------------------------------
  // TIER 1: BEGINNER / INITIATE
  // --------------------------------------------------------------------------
  {
    id: 'proj-beg-1',
    tier: 'Beginner',
    tierLevel: 'Tier 1',
    title: 'End-to-End Housing Price Predictor with Feature Pipeline & Stacking',
    domain: 'Tabular / Classical ML',
    difficultyBadge: 'neo-badge-green',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Optuna', 'Streamlit'],
    timeEstimate: '1 - 2 Weeks',
    summary: 'Build a production-style regression pipeline handling missing data imputation, outlier clipping, target encoding, and ensembled stacking (Ridge + Random Forest + LightGBM).',
    dataset: 'Kaggle Ames Housing / California Housing Dataset',
    learningOutcomes: [
      'Data leakage prevention with Scikit-Learn ColumnTransformer and Pipeline',
      'Hyperparameter optimization using Optuna Bayesian search',
      'Model interpretability using SHAP (SHapley Additive exPlanations) values',
      'Deploying an interactive prediction UI using Streamlit'
    ],
    resumeBullet: 'Engineered an end-to-end regression pipeline with ensemble stacking (LightGBM + XGBoost), achieving top 3% validation RMSE while reducing feature preprocessing latency by 45% via vectorized transformers.',
    githubArchitecture: 'data/ -> src/pipelines/ -> src/models/ -> src/eval/ -> app.py -> tests/'
  },
  {
    id: 'proj-beg-2',
    tier: 'Beginner',
    tierLevel: 'Tier 1',
    title: 'Customer Churn & Risk Engine with SHAP Interpretability',
    domain: 'Binary Classification',
    difficultyBadge: 'neo-badge-green',
    techStack: ['Python', 'LightGBM', 'Imbalanced-Learn (SMOTE)', 'SHAP', 'FastAPI'],
    timeEstimate: '1 - 2 Weeks',
    summary: 'Develop a churn classification engine addressing extreme class imbalance. Generate real-time feature impact waterfalls for business stakeholders using SHAP.',
    dataset: 'Telco Customer Churn / Bank Customer Churn (100k+ rows)',
    learningOutcomes: [
      'Handling class imbalance: Cost-sensitive loss vs SMOTE vs Focal Loss',
      'Threshold calibration using Precision-Recall curves and Cost-Benefit matrices',
      'Global vs Local feature attribution with TreeSHAP',
      'Serving predictions via a RESTful FastAPI endpoint'
    ],
    resumeBullet: 'Built a customer churn classification service using cost-sensitive LightGBM; calibrated decision thresholds to maximize business ROI, identifying $240K in at-risk annual recurring revenue.',
    githubArchitecture: 'notebooks/eda.ipynb -> src/train.py -> src/serve.py -> Dockerfile'
  },
  {
    id: 'proj-beg-3',
    tier: 'Beginner',
    tierLevel: 'Tier 1',
    title: 'PyTorch Vision Classifier & Visual Explainer (CAM)',
    domain: 'Computer Vision Basics',
    difficultyBadge: 'neo-badge-green',
    techStack: ['PyTorch', 'Torchvision', 'Grad-CAM', 'Matplotlib', 'Streamlit'],
    timeEstimate: '2 Weeks',
    summary: 'Fine-tune a ResNet-18/34 on custom image classes. Implement Grad-CAM (Class Activation Mapping) to produce heatmaps highlighting which pixels guided the classification.',
    dataset: 'Oxford-IIIT Pet Dataset / Plant Disease Dataset',
    learningOutcomes: [
      'Custom PyTorch Dataset and DataLoader with dynamic data augmentations (Albumentations)',
      'Transfer learning: feature extraction vs full fine-tuning with learning rate warmups',
      'Mathematical hook implementation in PyTorch for forward/backward gradient capture',
      'Visualizing convolutional feature activations via Grad-CAM heatmaps'
    ],
    resumeBullet: 'Fine-tuned ResNet-34 on 50K image dataset achieving 96.2% top-1 accuracy; integrated Grad-CAM visual heatmaps to verify network attention on salient features.',
    githubArchitecture: 'dataset/ -> models/resnet_transfer.py -> utils/grad_cam.py -> app.py'
  },

  // --------------------------------------------------------------------------
  // TIER 2: INTERMEDIATE / PRACTITIONER
  // --------------------------------------------------------------------------
  {
    id: 'proj-int-1',
    tier: 'Intermediate',
    tierLevel: 'Tier 2',
    title: 'Multi-Modal Semantic Search Engine with CLIP & Vector DB',
    domain: 'Multimodal / Vector Search',
    difficultyBadge: 'neo-badge-blue',
    techStack: ['OpenAI CLIP', 'PyTorch', 'Qdrant / Chroma', 'FastAPI', 'Docker'],
    timeEstimate: '3 - 4 Weeks',
    summary: 'Build a cross-modal search engine that allows users to search thousands of images using natural language text queries ("sunset over snowy mountains") or image-to-image similarity.',
    dataset: 'Unsplash 25k Lite / MS-COCO 2017 Sample',
    learningOutcomes: [
      'Dual-encoder architecture mechanics: text encoder + vision ViT projector',
      'Cosine similarity vs Dot product over L2-normalized embeddings',
      'Hierarchical Navigable Small World (HNSW) vector indexing and graph recall',
      'Building asynchronous search APIs with sub-30ms retrieval latency'
    ],
    resumeBullet: 'Architected a multi-modal semantic search microservice indexing 50,000+ visual assets using OpenAI CLIP and Qdrant HNSW indexing, delivering sub-25ms retrieval latency with 91% Recall@10.',
    githubArchitecture: 'indexer/embed_images.py -> db/qdrant_client.py -> api/main.py -> docker-compose.yml'
  },
  {
    id: 'proj-int-2',
    tier: 'Intermediate',
    tierLevel: 'Tier 2',
    title: 'NanoGPT: Autoregressive Language Model Trained from Scratch',
    domain: 'Transformers / NLP Foundations',
    difficultyBadge: 'neo-badge-blue',
    techStack: ['PyTorch', 'tiktoken', 'CUDA', 'Weights & Biases'],
    timeEstimate: '3 Weeks',
    summary: 'Implement every line of a Decoder-only Transformer in PyTorch: multi-head self-attention, causal masking, layer normalization, residual connections, and positional embeddings.',
    dataset: 'TinyShakespeare / OpenWebText (subset)',
    learningOutcomes: [
      'Writing scaled dot-product attention from raw tensor operations without nn.MultiheadAttention',
      'Byte-Pair Encoding (BPE) tokenization mechanics and vocabulary mapping',
      'Causal masking matrices preventing look-ahead during next-token prediction',
      'Learning rate schedules (Cosine decay with linear warmup) and gradient clipping'
    ],
    resumeBullet: 'Implemented a 45M-parameter autoregressive Transformer from scratch in PyTorch following GPT-2 architecture; trained with AdamW and cosine warmup on GPU, achieving validation perplexity of 18.4.',
    githubArchitecture: 'model.py -> train.py -> sample.py -> tokenizer.py -> tests/'
  },
  {
    id: 'proj-int-3',
    tier: 'Intermediate',
    tierLevel: 'Tier 2',
    title: 'Production Real-Time Object Detection Pipeline (YOLOv8 + RTSP Streaming)',
    domain: 'Computer Vision & Edge',
    difficultyBadge: 'neo-badge-blue',
    techStack: ['Ultralytics YOLOv8', 'OpenCV', 'TensorRT', 'FastAPI', 'WebSockets'],
    timeEstimate: '3 Weeks',
    summary: 'Deploy an automated object detection and multi-object tracking (ByteTrack / DeepSORT) system processing live video streams with bounding box tracking and telemetry logging.',
    dataset: 'Custom Traffic / Drone Surveillance Dataset',
    learningOutcomes: [
      'Anchor-free object detection, Non-Maximum Suppression (NMS), and IoU calculations',
      'Object tracking via Kalman filters and visual re-identification features',
      'Optimizing inference speed using TensorRT FP16 model serialization',
      'Streaming detection overlays over low-latency WebSockets'
    ],
    resumeBullet: 'Developed an automated surveillance tracking pipeline utilizing YOLOv8 and ByteTrack; converted model to TensorRT FP16, boosting throughput from 28 FPS to 92 FPS on an NVIDIA RTX 4090.',
    githubArchitecture: 'weights/ -> src/tracker.py -> src/tensorrt_engine.py -> server/ws_stream.py'
  },

  // --------------------------------------------------------------------------
  // TIER 3: ADVANCED / ARCHITECT
  // --------------------------------------------------------------------------
  {
    id: 'proj-adv-1',
    tier: 'Advanced',
    tierLevel: 'Tier 3',
    title: 'Enterprise RAG Agent with Hybrid Search, Re-Ranking & LangGraph',
    domain: 'Generative AI & Agentic Systems',
    difficultyBadge: 'neo-badge-amber',
    techStack: ['LangGraph', 'LlamaIndex', 'Milvus / Pinecone', 'Cohere Re-Ranker', 'FastAPI', 'Ragas'],
    timeEstimate: '4 - 6 Weeks',
    summary: 'A resilient, cyclical RAG system that routes queries, executes BM25 + dense hybrid retrieval, re-ranks candidate passages, self-evaluates groundedness, and refines query on hallucination.',
    dataset: 'SEC 10-K Financial Filings / Medical PubMed Abstracts',
    learningOutcomes: [
      'Self-RAG and Corrective RAG (CRAG) cyclical workflow graphs with LangGraph',
      'Hybrid search: Reciprocal Rank Fusion (RRF) combining sparse BM25 and dense embeddings',
      'Cross-encoder reranking to weed out irrelevant semantic neighbors',
      'Automated RAG Triad evaluation: Faithfulness, Answer Relevance, Context Recall using Ragas'
    ],
    resumeBullet: 'Architected an enterprise Self-RAG financial intelligence agent using LangGraph and Milvus; incorporated Cohere cross-encoder reranking and automated evaluation with Ragas, reducing hallucination by 78%.',
    githubArchitecture: 'graph/nodes.py -> retriever/hybrid.py -> eval/ragas_suite.py -> api/main.py'
  },
  {
    id: 'proj-adv-2',
    tier: 'Advanced',
    tierLevel: 'Tier 3',
    title: 'LoRA / QLoRA Domain Fine-Tuning Pipeline with vLLM Serving',
    domain: 'LLM Systems & Serving',
    difficultyBadge: 'neo-badge-amber',
    techStack: ['Unsloth / Axolotl', 'Hugging Face PEFT', 'vLLM', 'Triton Server', 'Docker'],
    timeEstimate: '4 - 5 Weeks',
    summary: 'Fine-tune a 7B-8B parameter model (Llama-3 / Mistral) on custom medical or legal instruction datasets. Merge adapters and serve via vLLM with PagedAttention and continuous batching.',
    dataset: 'Medical Dialogue Dataset / Legal Contract Dataset',
    learningOutcomes: [
      'Quantized Low-Rank Adaptation (QLoRA) 4-bit NormalFloat (NF4) mechanics',
      'Preparing ShareGPT / ChatML conversational instruction-tuning format',
      'Evaluating domain loss, MMLU benchmarks, and perplexity curves',
      'Deploying high-throughput vLLM inference server with OpenAI-compatible endpoint'
    ],
    resumeBullet: 'Fine-tuned Llama-3-8B on domain corpus using QLoRA 4-bit quantization, merging adapters into high-concurrency vLLM serving container achieving 180 tokens/sec across 16 concurrent requests.',
    githubArchitecture: 'train/lora_config.yaml -> scripts/merge_weights.py -> deploy/vllm_service.sh -> Dockerfile'
  },
  {
    id: 'proj-adv-3',
    tier: 'Advanced',
    tierLevel: 'Tier 3',
    title: 'Full MLOps Platform with MLflow, Feast Feature Store & Kubernetes',
    domain: 'Production MLOps',
    difficultyBadge: 'neo-badge-amber',
    techStack: ['Kubernetes', 'MLflow', 'Feast Feature Store', 'DVC', 'Evidently AI', 'GitHub Actions'],
    timeEstimate: '5 - 6 Weeks',
    summary: 'Build an industrial-grade ML platform with versioned datasets, online/offline feature store consistency, automated training pipelines on PR, model staging registry, and drift alarms.',
    dataset: 'High-Frequency Financial Transaction Stream / E-Commerce Clickstream',
    learningOutcomes: [
      'Feature store synchronization: Offline data warehouse (BigQuery/Postgres) vs Online low-latency key-value store (Redis)',
      'CI/CD for ML: automated training, regression testing, and packaging into OCI container',
      'Continuous drift monitoring: KS-test on feature distributions and automated retraining triggers with Evidently AI',
      'Deploying canary and shadow release routing in Kubernetes'
    ],
    resumeBullet: 'Deployed a Kubernetes-based MLOps platform integrating Feast feature store (Redis + Postgres) and MLflow registry; automated canary deployments via GitHub Actions and detected data drift in production.',
    githubArchitecture: 'feature_store/ -> pipelines/dvc.yaml -> k8s/deployments.yaml -> .github/workflows/mlops.yml'
  },

  // --------------------------------------------------------------------------
  // TIER 4: GOD LEVEL / RESEARCH LUMINARY
  // --------------------------------------------------------------------------
  {
    id: 'proj-god-1',
    tier: 'God Level',
    tierLevel: 'Tier 4',
    title: 'Pre-train a 1B Foundation LLM with Distributed Data Parallel & FlashAttention',
    domain: 'Foundation Model Pretraining',
    difficultyBadge: 'neo-badge-god',
    techStack: ['PyTorch FSDP', 'FlashAttention-2', 'Triton (CUDA)', 'DeepSpeed ZeRO-3', 'W&B'],
    timeEstimate: '8 - 12 Weeks',
    summary: 'The ultimate applied science feat. Pre-train a 1-billion parameter Transformer from scratch on a multi-GPU cluster. Implement custom FlashAttention, RoPE, SwiGLU, and ZeRO-3 memory sharding.',
    dataset: 'FineWeb / RedPajama-V2 Sample (100B+ Tokens)',
    learningOutcomes: [
      'Memory sharding mathematics: ZeRO-Stage 1 (optimizer), Stage 2 (gradients), Stage 3 (parameters)',
      'FlashAttention kernel integration: GPU SRAM memory tiling and online softmax to bypass HBM bandwidth bottleneck',
      'Rotary Position Embeddings (RoPE) complex vector rotations and KV-cache compression',
      'Loss spike diagnostics: gradient clipping, muP (maximal update parametrization), and FP8/BF16 mixed precision stability'
    ],
    resumeBullet: 'Pre-trained a 1.2B foundation language model across a distributed multi-GPU cluster using PyTorch FSDP and custom FlashAttention-2 kernels; managed Chinchilla scaling budget across 80B tokens with zero loss spikes.',
    githubArchitecture: 'kernels/flash_attn.cu -> model/transformer.py -> distributed/fsdp_trainer.py -> configs/1b_pretrain.yaml'
  },
  {
    id: 'proj-god-2',
    tier: 'God Level',
    tierLevel: 'Tier 4',
    title: 'Autonomous Multi-Agent Software Engineer with Sandbox Execution & MCP',
    domain: 'Autonomous Systems & AgentOps',
    difficultyBadge: 'neo-badge-god',
    techStack: ['Python', 'Model Context Protocol (MCP)', 'Docker SDK', 'LangGraph', 'Tree-sitter', 'AsyncIO'],
    timeEstimate: '8 - 10 Weeks',
    summary: 'Build an autonomous SWE-bench style AI software engineer. The agent receives a GitHub issue, navigates directory trees using Tree-sitter AST parsing, writes reproduction tests in an isolated Docker sandbox, iterates on the bug fix, and generates a pull request.',
    dataset: 'SWE-bench Lite Evaluation Dataset',
    learningOutcomes: [
      'Implementing Anthropic Model Context Protocol (MCP) servers for file operations, grep search, and bash terminal execution',
      'Isolated Docker container sandbox execution with strict resource constraints, timeouts, and network isolation',
      'Abstract Syntax Tree (AST) parsing with Tree-sitter for structural code comprehension and reference tracing',
      'Agent self-reflection loops: analyzing compiler errors and test failure tracebacks to synthesize targeted code edits'
    ],
    resumeBullet: 'Developed an autonomous SWE-bench software engineer using LangGraph, MCP protocol, and isolated Docker execution environments; resolved 24% of SWE-bench Lite test cases autonomously with iterative test-driven repair.',
    githubArchitecture: 'agent/react_loop.py -> mcp_servers/ -> sandbox/docker_executor.py -> ast/parser.py -> eval/swe_bench_runner.py'
  },
  {
    id: 'proj-god-3',
    tier: 'God Level',
    tierLevel: 'Tier 4',
    title: 'Latent Diffusion Model from Scratch with Denoising U-Net & Text Conditioning',
    domain: 'Generative Computer Vision',
    difficultyBadge: 'neo-badge-god',
    techStack: ['PyTorch', 'CLIP Vision', 'Autoencoder (VAE)', 'DDIM / DPM-Solver', 'CUDA'],
    timeEstimate: '8 - 10 Weeks',
    summary: 'Recreate Stable Diffusion from first principles. Train a Variational Autoencoder (VAE) for latent compression, build a U-Net with spatial cross-attention layers conditioned on CLIP text embeddings, and implement DDIM fast sampling.',
    dataset: 'LAION-Aesthetics Sample / CelebA-HQ',
    learningOutcomes: [
      'Mathematical formulation of Denoising Diffusion Probabilistic Models (DDPM) and variational lower bounds (ELBO)',
      'Training a latent space VAE with perceptual loss (LPIPS) and discriminator adversarial loss',
      'Time-step sinusoidal embeddings and spatial cross-attention in the U-Net bottleneck',
      'Classifier-Free Guidance (CFG) mechanics to dramatically improve prompt fidelity',
      'DDIM deterministic sampling reducing inference steps from 1000 to 20'
    ],
    resumeBullet: 'Architected and trained a Latent Diffusion Model from scratch in PyTorch featuring a custom U-Net with cross-attention and Classifier-Free Guidance; implemented DDIM scheduler reducing sampling latency by 95% while retaining FID 14.2.',
    githubArchitecture: 'models/vae.py -> models/unet.py -> diffusion/ddim_scheduler.py -> conditioning/clip_embed.py -> train.py'
  },
  {
    id: 'proj-god-4',
    tier: 'God Level',
    tierLevel: 'Tier 4',
    title: 'Custom Tensor & Autograd Engine in C++ / CUDA with Python Bindings',
    domain: 'AI Systems & Compilers',
    difficultyBadge: 'neo-badge-god',
    techStack: ['C++20', 'CUDA', 'pybind11', 'CMake', 'Google Benchmark'],
    timeEstimate: '8 - 10 Weeks',
    summary: 'Build your own lightweight PyTorch. Implement dynamic n-dimensional tensors, memory striding, automatic reverse-mode differentiation computation graph, and handwritten CUDA matrix multiplication kernels with shared memory tiling.',
    dataset: 'Synthetic Matrix Benchmarks / MNIST verification',
    learningOutcomes: [
      'Custom memory allocator and contiguous vs strided tensor layout in host RAM and GPU VRAM',
      'Reverse-mode automatic differentiation DAG with topological sort and node gradient accumulation',
      'Writing high-performance CUDA kernels: thread blocks, warps, coalesced memory access, and shared memory tiling',
      'Exposing modern C++ tensor classes seamlessly to Python using pybind11'
    ],
    resumeBullet: 'Built a custom autograd tensor engine in C++20 and CUDA; optimized shared-memory matrix multiplication kernels achieving 84% of cuBLAS FLOPS on NVIDIA hardware, exposed to Python via pybind11.',
    githubArchitecture: 'src/tensor.cpp -> cuda/matmul_kernel.cu -> autograd/engine.cpp -> python/bindings.cpp -> tests/'
  }
];
