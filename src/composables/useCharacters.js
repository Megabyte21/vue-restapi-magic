/* eslint-disable prettier/prettier */
import { ref } from 'vue'
import useApi from '@/composables/useApi'

const facts = ref([])

const api = useApi()

const useFacts = () => {
  const fetchFacts = async () => {
    const { data } = await api.instance.get('/facts')
    facts.value.push(...data)
  }
  return { facts, fetchFacts }
}

export default useFacts
