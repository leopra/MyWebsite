// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Javascript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 3,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React',
  competency: 1,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Java',
  competency: 3,
  category: ['Tools', 'Languages'],
},
{
  title: 'MongoDB',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'PostgreSQL/SQLite3/SQL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Data Mining',
  competency: 2,
  category: ['Data Science'],
},
{
  title: 'Git/Mercurial',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Numpy',
  competency: 3,
  category: ['Data Science', 'Data Engineering', 'Python'],
},
{
  title: 'Tensorflow + Keras',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'Jupyter',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'HTML + CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages', 'Python'],
},
{
  title: 'C++',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'R',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'Matplotlib',
  competency: 3,
  category: ['Data Engineering', 'Data Science', 'Python'],
},
{
  title: 'Huggingface',
  competency: 3,
  category: ['Data Engineering', 'Data Science'],
},
{
  title: 'Scikit-Learn',
  competency: 3,
  category: ['Data Engineering', 'Data Science', 'Python'],
},
{
  title: 'Hadoop',
  competency: 2,
  category: ['Data Engineering', 'Data Science'],
},
{
  title: 'Spark',
  competency: 3,
  category: ['Data Engineering', 'Data Science'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
