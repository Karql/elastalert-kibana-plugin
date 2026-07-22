FROM docker.elastic.co/kibana/kibana:9.3.7

COPY ./plugins/elastalertKibanaPlugin-9.3.7.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.3.7.zip
