export const questionsData: QuestionsData = [
  {
    section: 1,
    sectionTitle: 'Sobre mi Gobierno Local',
    sectionDescription:
      'Para iniciar el viaje hacia el mundo de los datos necesitamos la siguiente información sobre su institución.',
    sectionPoints: 0,
    questions: []
  },
  {
    section: 2,
    sectionTitle: 'Propósito',
    sectionDescription:
      'Esta sección evalúa en qué medida los datos se están considerando como un elemento integral para la elaboración de estrategias, la toma de decisiones y los procesos en la institución.',
    sectionPoints: 0,
    questions: [
      {
        id: '002001',
        question:
          'En tu institución, ¿tienen claramente identificados los datos que recopilan de forma directa en todas las áreas o direcciones para crear informes y/o tomar decisiones?',
        options: [
          {
            text: 'Sí, en todas las áreas o direcciones',
            value: 4
          },
          {
            text: 'Solo en algunas áreas o direcciones',
            value: 2
          },
          {
            text: 'Regularmente',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002002',
        question:
          '¿Utilizan además datos de fuentes externas para crear informes y/o tomar decisiones?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002003',
        question:
          '¿Tienen claramente establecido el proceso que cada área debe seguir para recopilar y compartir datos con otras áreas o direcciones?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002004',
        question:
          '¿Tienen definida una política de uso, compartición y publicación de los datos que recopilan?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002005',
        question: '¿Tienen definida una política de gobernanza de datos en la institución?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002006',
        question:
          '¿Cuentan con criterios definidos para la protección y uso de los datos personales que recopilan?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002007',
        question: '¿Cuáles son los principales usos que le dan a los datos que recopilan? ',
        options: [
          {
            text: 'Crear la planificación anual de actividades',
            value: 1
          },
          {
            text: 'Entender mejor las necesidades de la ciudadanía',
            value: 1
          },
          {
            text: 'Informar a la ciudadanía de los programas y proyectos que implementan',
            value: 1
          },
          {
            text: 'Medir el impacto de los programas y proyectos que se implementan',
            value: 1
          },
          {
            text: 'Otros',
            value: 1
          }
        ],
        type: 'checkbox',
        questionPoints: null
      },
      {
        id: '002008',
        question:
          '¿Cuentan con procedimientos técnicos definidos para validar y mejorar la calidad de datos que usan, recopilan y/o publican?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002009',
        question:
          '¿Cuentan con procedimientos definidos para identificar las necesidades de datos desde otras instituciones o ciudadanía?',
        options: [
          {
            text: 'Sí',
            value: 2
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002010',
        question: ' ¿Con qué frecuencia realizan esta identificación de necesidades de datos?',
        options: [
          {
            text: 'Semanal',
            value: 4
          },
          {
            text: 'Mensual',
            value: 3
          },
          {
            text: 'Semestral',
            value: 2
          },
          {
            text: 'Anual',
            value: 1
          },
          {
            text: 'No se ha realizado hasta el momento',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002011',
        question:
          '¿Cuentan con una definición clara de qué son los datos abiertos y por qué son importantes?',
        options: [
          {
            text: 'Sí, se conoce en todas las áreas o direcciones',
            value: 4
          },
          {
            text: 'Existe pero no se difunde',
            value: 2
          },
          {
            text: 'No se cuenta con una definición',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '002012',
        question:
          ' ¿Existen políticas o iniciativas que promuevan la cultura de datos abiertos dentro de su institución?',
        options: [
          {
            text: 'Sí',
            value: 4
          },
          {
            text: 'No',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      }
    ]
  },
  {
    section: 3,
    sectionTitle: 'La Práctica',
    sectionDescription:
      'Esta sección evalúa el soporte, herramientas y procesos para manejar datos de manera responsable.',
    sectionPoints: 0,
    questions: [
      {
        id: '003001',
        question:
          '¿Cómo describiría la calidad de los datos de su institución? Los datos de nuestra institución son precisos: se acercan a sus valores reales.',
        options: [
          {
            text: 'Nunca',
            value: 0
          },
          {
            text: 'A veces',
            value: 1
          },
          {
            text: 'Regularmente',
            value: 2
          },
          {
            text: 'Frecuentemente',
            value: 3
          },
          {
            text: 'Siempre',
            value: 4
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003002',
        question:
          'Los datos de nuestra institución son completos: tenemos todos los datos que necesitamos.',
        options: [
          {
            text: 'Nunca',
            value: 0
          },
          {
            text: 'A veces',
            value: 1
          },
          {
            text: 'Regularmente',
            value: 2
          },
          {
            text: 'Frecuentemente',
            value: 3
          },
          {
            text: 'Siempre',
            value: 4
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003003',
        question:
          'Los datos de nuestra institución son consistentes: los datos coinciden en todos nuestros sistemas.',
        options: [
          {
            text: 'Nunca',
            value: 0
          },
          {
            text: 'A veces',
            value: 1
          },
          {
            text: 'Regularmente',
            value: 2
          },
          {
            text: 'Frecuentemente',
            value: 3
          },
          {
            text: 'Siempre',
            value: 4
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003004',
        question: '¿Cómo gestiona su institución la calidad de los datos?',
        options: [
          {
            text: 'Identificamos y eliminamos cualquier discrepancia en nuestros datos',
            value: 1
          },
          {
            text: 'Empleamos procesos para mantener nuestros datos actualizados',
            value: 1
          },
          {
            text: 'Mantenemos un registro de los activos de datos y quién es responsable de ellos',
            value: 1
          },
          {
            text: 'Ninguna de estas opciones aplica',
            value: 1
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'checkbox',
        questionPoints: null
      },
      {
        id: '003005',
        question:
          '¿Qué políticas y prácticas utiliza su institución para mantener seguros sus datos?',
        options: [
          {
            text: 'Restringimos el acceso a datos sensibles y personales',
            value: 1
          },
          {
            text: 'Eliminamos datos que ya no son necesarios',
            value: 1
          },
          {
            text: 'Monitoreamos continuamente la seguridad de nuestros datos',
            value: 1
          },
          {
            text: 'Probamos continuamente la seguridad de nuestros datos',
            value: 1
          },
          {
            text: 'Ninguna de estas opciones aplica',
            value: 0
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'checkbox',
        questionPoints: null
      },
      {
        id: '003006',
        question: '¿Su institución comprende las regulaciones para los datos que almacena?',
        options: [
          {
            text: 'Siempre',
            value: 4
          },
          {
            text: 'En cierta medida',
            value: 2
          },
          {
            text: 'No',
            value: 0
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      },
      {
        id: '003007',
        question:
          '¿Su institución cuenta con al menos una persona responsable de la seguridad de los datos?',
        options: [
          {
            text: 'Sí',
            value: 4
          },
          {
            text: 'No',
            value: 0
          },
          {
            text: 'No estoy seguro',
            value: 0
          }
        ],
        type: 'radio',
        questionPoints: null
      }
    ]
  }
]
