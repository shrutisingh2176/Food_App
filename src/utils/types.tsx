
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
// UserClass & About
 export interface UserProps {
  name: string;
  location?: string;
  
}
// UserClass
 export interface UserState {
  userInfo: {
    name: string;
    location: string;
  };
}

//  export interface MenuCategoryProps {
//   data: {
//     title?: string;
//     itemCards?: any[];
  //   }; };


 interface MenuItem {
  card: {
    info: {
      id: string;
      name: string;
      price: number;
      imageId?: string;
    };
  };
}

 export interface ItemListProps {
  items: MenuItem[];
}

export interface MenuCategoryData {
  title?: string;
  itemCards?: any[];
}

export interface MenuCategoryProps {
  data: MenuCategoryData;
  index: number;
  showItems: boolean;
  setShowIndex: React.Dispatch<React.SetStateAction<number | null>>;

}

//(index: number | null) => void;



