/* ==========================================================================
   TENSORARCADE: FIRST PRINCIPLES FORMULA SHEET & TOOL ARSENAL
   ========================================================================== */

const FORMULA_SHEET_DATA = [
  {
    category: 'Attention & Transformers',
    items: [
      {
        name: 'Scaled Dot-Product Attention',
        formula: 'Attention(Q, K, V) = softmax( (Q K^T) / sqrt(d_k) ) V',
        intuition: 'Computes compatibility between Query and Key tokens. Division by sqrt(d_k) counters variance scaling to prevent vanishing gradients in softmax.'
      },
      {
        name: 'Multi-Head Attention (MHA)',
        formula: 'MHA(Q, K, V) = Concat(head_1, ..., head_h) W^O  where head_i = Attention(Q W_i^Q, K W_i^K, V W_i^V)',
        intuition: 'Allows the model to jointly attend to information from different representation subspaces at different positions.'
      },
      {
        name: 'Rotary Position Embeddings (RoPE)',
        formula: 'R_{Θ,m}^d x_m = (x_m^{(1)} cos(mθ) - x_m^{(2)} sin(mθ), ...)',
        intuition: 'Encodes relative position by rotating query and key vectors in 2D chunks in complex space, preserving inner product decay over distance.'
      }
    ]
  },
  {
    category: 'Optimization & Gradients',
    items: [
      {
        name: 'Adam Optimizer Update',
        formula: 'm_t = β_1 m_{t-1} + (1-β_1) g_t ;  v_t = β_2 v_{t-1} + (1-β_2) g_t^2 ;  θ_t = θ_{t-1} - η (m_t / (1-β_1^t)) / (sqrt(v_t / (1-β_2^t)) + ε)',
        intuition: 'Combines exponential moving average of first moments (momentum) with second raw moments (adaptive learning rate scaling), correcting for zero-bias at initiation.'
      },
      {
        name: 'Gradient Descent with Momentum',
        formula: 'v_t = γ v_{t-1} + η ∇_θ J(θ) ;  θ = θ - v_t',
        intuition: 'Dampens oscillations across steep ravines and accelerates movement along flatter dimensions of the loss landscape.'
      },
      {
        name: 'Weight Decay (L2 Regularization)',
        formula: 'J_reg(θ) = J(θ) + (λ / 2) ||θ||_2^2  =>  θ_{t+1} = (1 - η λ) θ_t - η ∇ J(θ_t)',
        intuition: 'Shrinks parameters exponentially toward zero, preventing individual weights from exploding and reducing model variance.'
      }
    ]
  },
  {
    category: 'Loss Functions & Information Theory',
    items: [
      {
        name: 'Binary Cross-Entropy Loss (Log Loss)',
        formula: 'L(y, p) = - [ y log(p) + (1 - y) log(1 - p) ]',
        intuition: 'Negative log-likelihood of Bernoulli trial. Heavily penalizes confident incorrect predictions with asymptotic infinity.'
      },
      {
        name: 'Kullback-Leibler (KL) Divergence',
        formula: 'D_KL(P || Q) = Σ P(x) log( P(x) / Q(x) )',
        intuition: 'Measures excess surprise when encoding samples from true distribution P using code optimized for Q. Used in VAEs and RLHF policy drift.'
      },
      {
        name: 'Focal Loss (Class Imbalance)',
        formula: 'FL(p_t) = - (1 - p_t)^γ log(p_t)',
        intuition: 'Modulates standard cross-entropy with a focusing parameter γ, down-weighting well-classified easy examples to focus on hard samples.'
      }
    ]
  }
];

const TOOL_ARSENAL_DATA = [
  {
    category: 'Foundation & Training Frameworks',
    tools: [
      { name: 'PyTorch', role: 'De-facto Deep Learning & AI Research Engine', badge: 'Core' },
      { name: 'Hugging Face (Transformers, PEFT, TRL)', role: 'Standardized model hub, tokenizers & fine-tuning', badge: 'Standard' },
      { name: 'vLLM', role: 'High-throughput LLM serving engine with PagedAttention', badge: 'Serving' },
      { name: 'DeepSpeed & FSDP', role: 'Multi-GPU distributed training & parameter sharding', badge: 'Scale' },
      { name: 'Unsloth', role: 'Ultra-fast memory-efficient LoRA/QLoRA training (5x speedup)', badge: 'Fine-Tuning' }
    ]
  },
  {
    category: 'Agentic AI & Orchestration',
    tools: [
      { name: 'LangGraph', role: 'Stateful cyclic multi-agent graph workflows with human-in-the-loop', badge: 'Agent Framework' },
      { name: 'Model Context Protocol (MCP)', role: 'Anthropic universal open protocol for AI tool integration', badge: 'Protocol' },
      { name: 'CrewAI / AutoGen', role: 'Role-playing collaborative multi-agent simulation environments', badge: 'Multi-Agent' },
      { name: 'LlamaIndex', role: 'Data framework for complex RAG document ingestion & agents', badge: 'RAG' }
    ]
  },
  {
    category: 'Vector Databases & Retrieval',
    tools: [
      { name: 'Qdrant / Milvus', role: 'Production HNSW vector databases with filtering', badge: 'Vector DB' },
      { name: 'Pinecone', role: 'Fully-managed serverless vector search infrastructure', badge: 'Cloud' },
      { name: 'ChromaDB', role: 'Lightweight in-memory and local vector database for prototyping', badge: 'Local' },
      { name: 'Cohere / BGE Re-Ranker', role: 'Cross-encoder neural rerankers for RAG precision', badge: 'Reranker' }
    ]
  },
  {
    category: 'MLOps, Observability & Security',
    tools: [
      { name: 'MLflow & Weights & Biases (W&B)', role: 'Experiment tracking, artifacts & model registry', badge: 'Tracking' },
      { name: 'Feast', role: 'Open-source feature store bridging offline and online serving', badge: 'Feature Store' },
      { name: 'Evidently AI', role: 'Production ML monitoring for data drift & concept drift', badge: 'Monitoring' },
      { name: 'LangSmith / Langfuse', role: 'Tracing, latency profiling & cost telemetry for LLMs', badge: 'Observability' },
      { name: 'NeMo Guardrails / Guardrails AI', role: 'Programmable safety rails against prompt injection & hallucinations', badge: 'AI Security' }
    ]
  }
];
