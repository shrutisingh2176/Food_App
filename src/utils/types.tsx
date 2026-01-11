
export interface Restaurant {
    info:{
        id: string;
        cloudinaryImageId: string;
        name: string;
        cuisines: string[];
        avgRating: number;
        costForTwo: string;
        sla:{
            deliveryTime: number;
    };
}};


 export type Card = {
  groupedCard?: any;
  card?: {
    card?: {
      itemCards?: any[];
    };
  };
};