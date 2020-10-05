import defaultImage from '../../Assets/WellTempered.jpg'
import beethovenSonata from '../../Assets/SonatasBeethoven.jpg'
import songWithout from '../../Assets/SongWithoutWords.jpg'

export const bookData = [
    {
        id: 1,
        title: 'Well Tempered Clavier',
        author: 'Johann Sebastian Bach',
        description: 'Ciclos de preludios y fugas compuestos en todas las tonalidades mayores y menores de la gama cromática.',
        image: defaultImage
    },
    {
        id: 2,
        title: 'Beethoven Sonatas for the Piano VOL.1',
        author: 'Ludwing Van Beethoven',
        description: 'Ludwig van Beethoven escribió sus 32 sonatas para piano entre 1795 y 1822. Aunque originalmente no pretendía ser un todo significativo, como conjunto comprenden una de las colecciones de obras más importantes de la historia de la música.',
        image: beethovenSonata
    },
    {
        id: 3,
        title: 'Lieder ohne Worte',
        author: 'Felix Mendelssohn',
        description: 'Songs Without Words es una serie de breves canciones líricas para piano del compositor romántico Felix Mendelssohn, escritas entre 1829 y 1845.',
        image: songWithout
    },
];