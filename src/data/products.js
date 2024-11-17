import sku1ImgUrl from './images/comida-perro.webp'
import sku2ImgUrl from './images/comida-gato.webp'
import sku3ImgUrl from './images/kit-pecera.webp'

export const products = [
  {
    id: 'sku-1',
    title: 'Ración Completa para Perros - 1kg',
    description: 'Proporciona a tu perro una nutrición equilibrada y deliciosa con nuestra ración premium para perros, formulada para satisfacer sus necesidades diarias de energía y salud. Con ingredientes de alta calidad y un sabor irresistible, esta comida está enriquecida con vitaminas, minerales y antioxidantes que apoyan el sistema inmunológico, la salud digestiva y el bienestar general de tu mascota. Ideal para perros de todas las razas y tamaños, cada porción está pensada para mantener una piel y un pelaje saludables, así como para promover una energía duradera durante todo el día. ¡Dale lo mejor a tu compañero fiel con cada comida!',
    price: 1500,
    pictureUrl: sku1ImgUrl,
    category: 'perro',
    stock: 5,
  },
  {
    id: 'sku-2',
    title: 'Ración Completa para Gatos - 1kg',
    description:'Ofrece a tu gato una nutrición de alta calidad con nuestra ración premium especialmente diseñada para satisfacer sus necesidades diarias de energía y salud. Formulada con ingredientes seleccionados y un sabor irresistible, esta comida es rica en proteínas, vitaminas y minerales esenciales que apoyan un sistema inmunológico fuerte, una piel suave y un pelaje brillante. Además, su fórmula está diseñada para mejorar la digestión y mantener la vitalidad de tu felino, asegurando que se sienta lleno de energía y bienestar. Ideal para gatos de todas las edades y razas, cada bocado es una experiencia deliciosa que cuida de su salud integral. ¡Con esta ración, tu gato se merecerá lo mejor en cada comida!' ,
    price: 1250,
    pictureUrl: sku2ImgUrl,
    category: 'gato',
    stock: 3,
  },
  {
    id: 'sku-3',
    title: 'Kit Completo para Peceras - 50L',
    description: 'Transforma tu pecera en un oasis acuático con nuestro kit completo para peceras de 50L. Este set incluye todo lo necesario para establecer y mantener un entorno saludable para tus peces, desde el filtro de alta eficiencia hasta las luces LED de bajo consumo, pasando por un sistema de calefacción preciso para garantizar la temperatura ideal. Con accesorios de calidad como piedras decorativas, una red para peces y un termómetro, este kit está diseñado para facilitar la instalación y el cuidado continuo de tu acuario. Ya seas un principiante o un acuarista experimentado, este conjunto proporciona una experiencia completa y segura para tus peces, asegurando un ambiente limpio y equilibrado. ¡Todo lo que necesitas en un solo paquete para crear tu propio pequeño mundo acuático!',
    price: 1780,
    pictureUrl: sku3ImgUrl,
    category: 'otros',
    stock: 2,
  },
]