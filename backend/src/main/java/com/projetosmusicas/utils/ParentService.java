package com.projetosmusicas.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public abstract class ParentService<T> {

    @Autowired
    private FilterService<T, Integer> filterService;

    /**
     * Este método deve ser implementado nas classes filhas para retornar o repositório.
     * @return
     */
    public abstract BaseRepository<T, Integer> getRepository();

    public void validate(T object) {
        // override this method to validate the object
    }

    public void beforeSave(T object) {
        if (object instanceof ParentEntity) {
            ParentEntity entity = (ParentEntity) object;
            if (entity.getId() == null) {
                entity.setDataCriacao(new Date());
            }
        }
    }

    public void afterSave(T object) {
        // override this method to do something after saving the object
    }

    public void beforeDelete(T object) {
        // override this method to do something before deleting the object
    }

    public void afterDelete(T object) {
        // override this method to do something after deleting the object
    }

    public Iterable<T> findAll() {
        return getRepository().findAll();
    }

    public Iterable<T> filterBy(String filterStr, String rangeStr, String sortStr) {
        QueryParamWrapper wrapper = QueryParamExtractor.extract(filterStr, rangeStr, sortStr);
        return filterService.filterBy(wrapper, getRepository());
    }

    public T findById(Integer id) {
        return (T) getRepository().findById(id).orElse(null);
    }

    public T save(T object) {
        validate(object);
        beforeSave(object);
        T savedObject = getRepository().save(object);
        afterSave(savedObject);
        return savedObject;
    }

    public void deleteById(Integer id) {
        T object = findById(id);
        beforeDelete(object);
        getRepository().deleteById(id);
        afterDelete(object);
    }
}
