'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('tipoCocinas', [

    {
      tipococina: 'Gas de red',
    },
    {
      tipococina: 'Gas de tubo/Garrafa'
    },
    {
      tipococina: 'Kerosene/Leña/Carbon'
    },
    {
      tipococina: 'otro'
    },
  ]),
  up: async (queryInterface) => queryInterface.bulkInsert('tipoBaños', [
    {
      tipobaño: 'Uso exclusivo del hogar'
    },
    {
      tipobaño:'Compartido con otro/s hogar/es de la misma vivienda'
    },
    {
      tipobaño: 'Compartido con otra/s vivienda/s'
    },
    {
      tipobaño: 'No tiene baño'
    },
  ]),
  up: async (queryInterface) => queryInterface.bulkInsert('interviewType', [
    {
      tipoEntrevista: 'Personal Completa'
    },
    {
      tipoEntrevista:'Personal y Telefonica'
    },
    {
      tipoEntrevista: 'Solo Telefonica'
    },
  ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tipoCocinas', null, {
      truncate: true,
      cascade: false,
    });
    await queryInterface.bulkDelete('tipoBaños', null, {
      truncate: true,
      cascade: false,
    });
  },
};
