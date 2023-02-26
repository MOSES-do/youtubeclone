import { Stack } from '@mui/material'
import { categories } from "../utils/constant"





const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack direction="row" sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>

            {categories.map((category, index) => (
                <button key={index} onClick={() => setSelectedCategory(category.name)} className="category-btn" style={{ display: 'flex', gap: "10px", color: "white", background: selectedCategory === category.name && '#FC1503' }}>
                    <span style={{ color: category.name === selectedCategory ? "white" : "red" }}>{category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.5' }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )

}

export default Sidebar