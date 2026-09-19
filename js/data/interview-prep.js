/* ==========================================================================
   TENSORARCADE: FAANG MLE & APPLIED SCIENTIST PLAYBOOK
   Directly distilled from interviewing.io, Reddit FAANG Applied Scientist,
   and Scaler Machine Learning career guides.
   ========================================================================== */

const INTERVIEW_PLAYBOOK = {
  careerTracks: [
    {
      title: 'Applied Scientist / Research Scientist',
      focus: 'Advancing modeling theory, inventing novel architectures, and publishing at top CS venues (NeurIPS, ICML, ICLR).',
      pros: 'High prestige, intellectually stimulating, massive upside on breakthrough research.',
      cons: 'Extremely high hiring bar (often PhD or high-impact A* publications required).',
      interviewEmphasis: 'Whiteboard math derivations, first-principles algorithmic depth, reading & critiquing papers, PyTorch from scratch.'
    },
    {
      title: 'Machine Learning Engineer (Specialist)',
      focus: 'Deep domain expertise in a specific vertical (e.g. LLM fine-tuning & inference, Computer Vision, Recommender Systems).',
      pros: 'Go-to expert on the team, commands high compensation in specialized market niches.',
      cons: 'Narrower scope; changes in industry paradigms require re-specialization.',
      interviewEmphasis: 'Deep dive into specialized architecture, domain-specific failure modes, latency & memory profiling.'
    },
    {
      title: 'Machine Learning Engineer (Generalist)',
      focus: 'End-to-end ML delivery: ETL pipelines, feature engineering, baseline training, evaluation, Dockerization, and cloud deployment.',
      pros: 'High market demand, versatile across startups and tech giants, mature hiring pipelines.',
      cons: 'Can involve significant data cleaning, pipeline plumbing, and legacy maintenance.',
      interviewEmphasis: 'System design, breadth of classical ML & deep learning algorithms, coding speed (LeetCode medium), MLOps.'
    },
    {
      title: 'AI Engineer / Prompt Engineer',
      focus: 'Building user-facing products with LLM APIs, prompt engineering, RAG pipelines, agent frameworks (LangGraph/CrewAI).',
      pros: 'Fastest growing category, lower initial mathematical barrier, rapid product prototyping.',
      cons: 'High competition, rapid tool churn, lower technical moats compared to foundational modeling.',
      interviewEmphasis: 'Full-stack engineering, API design, vector database integration, latency optimization, and agent guardrails.'
    }
  ],

  systemDesignFramework: [
    {
      step: 1,
      title: 'Clarify Problem Scope & Constraints',
      description: 'Formulate business objective into an ML task. Clarify inputs, outputs, throughput (QPS), and maximum latency budget (e.g., <50ms for live search ranking vs batch nightly recommendations).'
    },
    {
      step: 2,
      title: 'Define Success Metrics (ML vs Business)',
      description: 'Align offline metrics (Precision, Recall, ROC-AUC, NDCG@K, MRR, Perplexity) with business KPIs (Click-Through Rate, Conversion Rate, User Retention, Revenue per Mille, Compute Cost).'
    },
    {
      step: 3,
      title: 'Data Collection, Labeling & Feature Engineering',
      description: 'Identify data sources, handling missing values, label leakage prevention, feature store integration (Feast/Tecton), online vs offline feature consistency, and negative sampling strategies.'
    },
    {
      step: 4,
      title: 'Model Architecture & Inductive Bias',
      description: 'Justify model selection based on data scale and latency constraints: Two-stage retrieval (ANN with ScaNN/HNSW) followed by heavy ranking (GBDT or Deep Cross Network). Compare tradeoffs.'
    },
    {
      step: 5,
      title: 'Loss Functions & Optimization Strategy',
      description: 'Choose loss functions suited for class imbalance (Focal Loss, Weighted Cross-Entropy, Contrastive InfoNCE Loss). Select optimizer (AdamW, Lion, SGD with momentum) and learning rate schedules.'
    },
    {
      step: 6,
      title: 'Model Serving & Inference Optimization',
      description: 'Design serving pipeline: Batch vs Streaming prediction, Triton Inference Server, ONNX Runtime conversion, Dynamic Batching, INT8/FP16 quantization, and KV-cache optimization.'
    },
    {
      step: 7,
      title: 'Monitoring, Drift Detection & Retraining',
      description: 'Setup production guardrails: Data distribution shift (Population Stability Index, Kolmogorov-Smirnov test), Concept drift detection, Shadow deployments, Canary releases, and automated retraining triggers.'
    }
  ],

  whiteboardMathDrills: [
    {
      question: 'Derive the gradient of Binary Cross-Entropy Loss with respect to the pre-activation logit z.',
      hint: 'Loss L = -[y*log(σ(z)) + (1-y)*log(1-σ(z))]. Note that dσ/dz = σ(z)*(1-σ(z)).',
      answer: 'dL/dz = σ(z) - y. This elegant result demonstrates why Logistic Regression with cross-entropy avoids vanishing gradients at early stages of training!'
    },
    {
      question: 'Derive Scaled Dot-Product Attention and explain why dividing by sqrt(d_k) is mathematically mandatory.',
      hint: 'Attention(Q, K, V) = softmax((Q K^T) / sqrt(d_k)) V. Consider variance of sum of d_k independent random variables.',
      answer: 'If components of Q and K are independent zero-mean unit-variance variables, their dot product has mean 0 and variance d_k. For large d_k, logits grow large in magnitude, pushing softmax into regions with extremely tiny gradients. Dividing by sqrt(d_k) restores unit variance.'
    },
    {
      question: 'Explain Adam optimizer equations and why bias correction is necessary.',
      hint: 'Moving averages of first moment (mean) and second raw moment (uncentered variance). Initialization at zero causes bias toward zero.',
      answer: 'm_t = β1*m_{t-1} + (1-β1)*g_t; v_t = β2*v_{t-1} + (1-β2)*g_t^2. With m_0 = 0, taking expectations shows E[m_t] = E[g_t]*(1 - β1^t). Dividing by (1 - β1^t) and (1 - β2^t) corrects the initialization bias during early iterations.'
    }
  ],

  conferenceRankings: [
    {
      tier: 'CORE A* (Flagship AI/ML)',
      venues: 'NeurIPS (Neural Information Processing Systems), ICML (International Conference on Machine Learning), ICLR (International Conference on Learning Representations)',
      impact: 'The premier global currency for ML researchers. Paper acceptances here are instant ticket to top industry labs (FAANG, OpenAI, DeepMind).'
    },
    {
      tier: 'CORE A* (Domain Flagships)',
      venues: 'CVPR (Computer Vision), ICCV (Computer Vision), ACL (Computational Linguistics), EMNLP (Natural Language Processing), SIGKDD (Data Mining)',
      impact: 'Field-defining venues for visual and language intelligence. Highly respected across academic hiring and research labs.'
    },
    {
      tier: 'Rapid Rolling Review & Workshops',
      venues: 'TMLR (Transactions on Machine Learning Research), NeurIPS/ICML Workshops, PMLR (Proceedings of Machine Learning Research)',
      impact: 'Ideal for early-stage empirical findings, reproducible benchmarks, and getting fast feedback within 4–6 weeks.'
    }
  ]
};
