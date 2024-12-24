import {create} from 'zustand';
const useStoreCategory = create((set) =>({
     categories : [
        {   
            id: 0,
            title: "All",
            isActive: true
        },
        {   
            id: 1,
            title: "Electronics",
            isActive: false
        },
        {   
            id: 2,
            title: "Books",
            isActive: false
        },
        {   
            id: 3,
            title: "Clothing",
            isActive: false
        },
        {   
            id: 4,
            title: "Furniture",
            isActive: false
        },
        {   
            id: 5,
            title: "Toys",
            isActive: false
        }
        
      ],
      isActiveFn : (categoryId) =>({
        categories : set((state) =>({
            categories : state.categories.map((category) => ({
                ...category,
                isActive: category.id === categoryId ? true : false
            }))
        }))
      })

}) );

export default useStoreCategory;