import { Libro } from "./models/libro";

export const LibrosMock : Libro []  = [
    {titulo : "Codigo Limpio", autor: "Robert C. Martin", copias: 5, categoria :"Informatica" , max: 5},
    {titulo : "Code Complete", autor: "Steve McConel", copias: 10, categoria: "Informatica", max: 10},
    {titulo : "Ser mortal", autor: "Atul Gawande", copias: 60, categoria: "Medicina", max: 60},
    {titulo : "Fisica Universitaria", autor: "Hugh Young", copias: 100, categoria: "Ciencias Exactas", max: 100}
]