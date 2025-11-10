import { ref, watch } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const isDark = ref(theme.value === 'dark')

  const toggleTheme = () => {
    isDark.value = !isDark.value
    theme.value = isDark.value ? 'dark' : 'light'
    updateTheme()
  }

  const setTheme = (newTheme) => {
    theme.value = newTheme
    isDark.value = newTheme === 'dark'
    updateTheme()
  }

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
    localStorage.setItem('theme', theme.value)
  }

  // Load theme from localStorage
  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
  }

  return {
    isDark,
    theme,
    toggleTheme,
    setTheme,
    loadTheme
  }
}
