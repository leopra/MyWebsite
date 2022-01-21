// TODO Add a couple lines about each project
const data = [
  {
    title: 'Weakly-supervised Text Classification based on Contextualized Word Embeddings',
    subtitle: 'NLP Master Thesis Research focused on improving Transformers models with unsupervised data sources',
    link: 'https://drive.google.com/file/d/19rcnGJcAWTSpoobC7_w0M2eqy8QO5vKO/view?usp=sharing',
    image: '/images/lotclass.png',
    date: '2021-08-20',
    desc: 'This thesis proposes an analysis of two Weakly supervised state-of-the-art models that use BERT contextualized embeddings to solve the word disambiguation problem in different ways. The operational analysis is applied on a classification task consisting in assigning a correct economic sector to a database of companies by analyzing their business description. In this regard, pros and cons of each model are taken into consideration. Finally, a new insightful model is introduced: it combines multiple sources of weak information into solving a joint task that solve some limitations of the models previously investigated when handling complex data categories.',
  },
  {
    title: 'News Classification using BERT',
    subtitle: 'Experiment to check Bert Performance to tackle a singlelabel classification problem',
    link: 'https://colab.research.google.com/drive/1kLEGMRUqenUrjPlMoXRE3ZuVoA4IF6Tc?usp=sharing',
    image: '/images/topic.png',
    date: '2021-06-21',
    desc: 'At https://colab.research.google.com/drive/111ZBRdJVoWOU-aYg78V1alvS-HVXTd-j?usp=sharing you can check the LDA analysys of the same dataset'
  },
  {
    title: 'Deforestation Detection with Time-Series on Satellite Images',
    subtitle: 'Machine Learning project in collaboration with FAO to detect deforestation in third world countries using Google Earth Engine Platform',
    link: 'https://drive.google.com/file/d/1ks4oTd9NMvb91LSM_7tj_j6hTMAne3ZK/view?usp=sharing',
    image: '/images/forest.jpeg',
    date: '2021-04-20',
    desc: 'Made a pipeline to correctly identify license plates and characters from a dataset of images',
  },
  {
    title: 'License Plate Recognizer',
    subtitle: 'Computer Vision Project',
    link: 'https://github.com/leopra/LicensePlateRecognition',
    image: './images/licenseplate.jpg',
    date: '2019-06-20',
    desc: 'Made a pipeline to correctly identify license plates and characters from a dataset of images',
  }, {
    title: 'Neural Network to predict Artist from Painting',
    subtitle: 'Project made during the Machine Learning course',
    link: 'https://www.kaggle.com/leonardopratesi/artistpredictor',
    image: '/images/dali.jpg',
    date: '2020-01-20',
    desc: 'Trained last layers of Resnet to predict the correct painting of each of 12 choosen painters on Kaggle',
  }, {
    title: 'Google Hashcode 2020 Solution',
    subtitle: 'algorithm made to find the solution to the book readout challenge',
    link: 'https://github.com/leopra/Hashcode2020',
    image: '/images/hashcode2020.png',
    date: '2020-01-20',
    desc: 'Solution to the problem of findind the best algorithm to optimize the readout of books from a set of libraries',
  }, {
    title: 'Travelling Salesman Algorithms',
    subtitle: '',
    link: 'https://github.com/leopra/TravellingSalesmanAlgorithms',
    image: '/images/tsp2.png',
    date: '2020-06-28',
    desc: 'implemented a set of approximation algorithms for the travelling salesman problem and analyzed the complexities',
  }, {
    title: 'Karger Algorithm Analysis',
    subtitle: '',
    link: 'https://github.com/leopra/KargerAlgorithm',
    image: '/images/karger.jpg',
    date: '2020-06-15',
    desc: 'Analized the Karger algorithms and possible implementations in Python',
  }, {
    title: 'Recommendation system for book based on user review',
    subtitle: '',
    link: 'https://www.kaggle.com/leonardopratesi/reccsysonbooks',
    image: '/images/recsys.png',
    date: '2020-01-15',
    desc: 'Kaggle notebook where i try the Suprise library to predict the user rating for each possible book',
  },
];

export default data;
